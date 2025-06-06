import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from '../components/Card';
import productData from '../utils/data/product';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar, FaShoppingCart, FaPlay, FaTimes } from 'react-icons/fa';
import banner1 from '../utils/image/banner/banner1.jpg';
import banner2 from '../utils/image/banner/banner2.jpg';

const Trending = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategoryParam = queryParams.get('category');
  const searchQuery = queryParams.get('search');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [prevBanner, setPrevBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryParam || 'all');
  const [sortOption, setSortOption] = useState('default');
  const [videoPopup, setVideoPopup] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const trending = productData.trending;
  const allProducts = productData.productData;
  const trendingPageData = productData.trendingpage;
  const categoryMappings = productData.categoryMappings;
  const featuredProductsRef = useRef(null);
  const [featuredPosition, setFeaturedPosition] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);
  
  // More dynamic category matching using the category mappings
  const getCategoryData = (categoryParam) => {
    if (!categoryParam) return null;
    
    // Direct match
    let categoryData = trendingPageData.find(item => 
      item.title.toLowerCase().replace(/\s+/g, '-') === categoryParam
    );
    
    // If no direct match, try to match using category mappings
    if (!categoryData && categoryMappings[categoryParam]) {
      const keywords = categoryMappings[categoryParam];
      categoryData = trendingPageData.find(item => {
        const title = item.title.toLowerCase();
        return keywords.some(keyword => title.includes(keyword));
      });
    }
    
    return categoryData;
  };
  
  const selectedTrendingData = getCategoryData(selectedCategoryParam);
  
  // Rest of the component remains the same
  const banners = selectedTrendingData?.banner || [
    {
      id: 1,
      imageUrl: banner1,
      heading: "Latest Tech Innovations",
      subheading: "Discover cutting-edge electronics that define the future"
    },
    {
      id: 2,
      imageUrl: banner2,
      heading: "Best Selling Gadgets",
      subheading: "The electronic devices our customers can't get enough of"
    },
    {
      id: 3,
      imageUrl: banner1,
      heading: "Smart Home Solutions",
      subheading: "Transform your living space with intelligent technology"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('recoil');
      setTimeout(() => {
        setAnimationPhase('slide');
        setPrevBanner(currentBanner);
        setCurrentBanner((prevBanner) =>
          prevBanner === banners.length - 1 ? 0 : prevBanner + 1
        );
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length, currentBanner]);

  useEffect(() => {
    if (animationPhase === 'slide' && currentBanner !== prevBanner) {
      setTimeout(() => {
        setAnimationPhase('bounce1');
        setTimeout(() => {
          setAnimationPhase('bounce2');
          setTimeout(() => {
            setAnimationPhase('bounce3');
            setTimeout(() => {
              setAnimationPhase('bounce4');
              setTimeout(() => {
                setAnimationPhase('idle');
              }, 150);
            }, 150);
          }, 150);
        }, 150);
      }, 500);
    }
  }, [currentBanner, prevBanner, animationPhase]);

  const getSliderTransform = () => {
    const baseTransform = `translateX(-${currentBanner * 100}%)`;

    switch (animationPhase) {
      case 'recoil':
        return `${baseTransform} translateX(-30px)`;
      case 'bounce1':
        return `${baseTransform} translateY(-20px)`;
      case 'bounce2':
        return `${baseTransform} translateY(0px)`;
      case 'bounce3':
        return `${baseTransform} translateY(-15px)`;
      case 'bounce4':
        return `${baseTransform} translateY(0px)`;
      default:
        return baseTransform;
    }
  };

  const goToBanner = (index) => {
    if (index !== currentBanner) {
      setAnimationPhase('recoil');
      setTimeout(() => {
        setPrevBanner(currentBanner);
        setCurrentBanner(index);
        setAnimationPhase('slide');
      }, 200);
    }
  };

  const filteredProducts = useMemo(() => {
    let products = [];
    
    if (selectedTrendingData) {
      products = selectedTrendingData.products;
    } else if (selectedCategory === 'all') {
      products = allProducts;
    } else {
      // Dynamic filtering based on category mappings
      if (categoryMappings[selectedCategory]) {
        const keywords = categoryMappings[selectedCategory];
        products = allProducts.filter(product => {
          // Check title
          const title = product.title.toLowerCase();
          if (keywords.some(keyword => title.includes(keyword))) {
            return true;
          }
          
          // Check features
          if (product.features) {
            const hasMatchingFeature = product.features.some(feature => {
              if (feature.title) {
                const featureTitle = feature.title.toLowerCase();
                return keywords.some(keyword => featureTitle.includes(keyword));
              }
              return false;
            });
            if (hasMatchingFeature) return true;
          }
          
          // Check description if exists
          if (product.description) {
            const description = product.description.toLowerCase();
            return keywords.some(keyword => description.includes(keyword));
          }
          
          return false;
        });
      } else {
        // Default filtering logic for any other category
        products = allProducts.filter(product => {
          const productTitle = product.title.toLowerCase();
          const productFeatures = product.features 
            ? product.features.map(f => f.title.toLowerCase()).join(' ')
            : '';
            
          return productTitle.includes(selectedCategory.toLowerCase()) ||
                productFeatures.includes(selectedCategory.toLowerCase());
        });
      }
    }
    
    // Search query filtering - Enhanced to check multiple product properties
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      return products.filter(product => {
        // Check product title (most important)
        const title = product.title.toLowerCase();
        if (title.includes(searchTerm)) {
          return true;
        }
        
        // Check product description
        const description = product.description ? product.description.toLowerCase() : '';
        if (description.includes(searchTerm)) {
          return true;
        }
        
        // Check features
        if (product.features) {
          // Handle features as array of strings or array of objects
          if (typeof product.features[0] === 'string') {
            const featuresText = product.features.join(' ').toLowerCase();
            if (featuresText.includes(searchTerm)) {
              return true;
            }
          } else if (typeof product.features[0] === 'object') {
            const hasMatchingFeature = product.features.some(feature => {
              const featureTitle = feature.title ? feature.title.toLowerCase() : '';
              return featureTitle.includes(searchTerm);
            });
            if (hasMatchingFeature) return true;
          }
        }
        
        return false;
      });
    }
    
    return products;
  }, [selectedTrendingData, selectedCategory, allProducts, searchQuery, categoryMappings]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  // Dynamic category buttons generation
  const categories = useMemo(() => {
    // Start with "All Products"
    const baseCategories = [{ id: 'all', name: 'All Products' }];
    
    // Add trending categories from trending data
    // trending.forEach(category => {
    //   baseCategories.push({
    //     id: category.id,
    //     name: category.name
    //   });
    // });
    
    // Add any category from trendingPageData that might not be in trending
    trendingPageData.forEach(category => {
      const categoryId = category.title.toLowerCase().replace(/\s+/g, '-');
      if (!baseCategories.find(c => c.id === categoryId)) {
        baseCategories.push({
          id: categoryId,
          name: category.title
        });
      }
    });

    return baseCategories;
  }, [trending, trendingPageData]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Function to open video popup - updated for direct popup functionality
  const openVideoPopup = (e, videoId) => {
    e.stopPropagation(); // Prevent navigation to product page
    setCurrentVideo(videoId);
    setVideoPopup(true);
    // Add no-scroll class to body
    document.body.classList.add('overflow-hidden');
  };

  // Function to close video popup
  const closeVideoPopup = () => {
    setVideoPopup(false);
    setCurrentVideo(null);
    // Remove no-scroll class from body
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden">
        <div
          className={`flex transition-transform ${
            animationPhase === 'recoil'
              ? 'duration-200'
              : ['bounce1', 'bounce2', 'bounce3', 'bounce4'].includes(animationPhase)
              ? 'duration-150'
              : 'duration-500'
          } ease-in-out`}
          style={{ transform: getSliderTransform() }}
        >
          {banners.map((banner, index) => (
            <div key={banner.id} className="w-full flex-shrink-0">
              <div
                className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{banner.heading}</h1>
                    <p className="text-xl text-white mb-8">{banner.subheading}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentBanner === index ? 'bg-blue-500 w-8' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => goToBanner(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                navigate(`/trending?category=${category.id}`);
                setSelectedCategory(category.id);
              }}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-600">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {selectedTrendingData && (
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">{selectedTrendingData.description}</p>
          </div>
        )}
        
        {selectedTrendingData && selectedTrendingData.benefits && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                  {selectedTrendingData.benefits.title || "Why Choose Our Electronics"}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(selectedTrendingData.benefits.points || [
                    {title: "Premium Quality", description: "Only the highest quality components and materials"},
                    {title: "Extended Warranty", description: "All our products come with manufacturer warranty"},
                    {title: "Tech Support", description: "Free technical support for all purchases"},
                    {title: "Easy Returns", description: "Hassle-free 30-day return policy"}
                  ]).map((point, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">{point.title}</h4>
                      <p className="text-gray-600 flex-grow">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {searchQuery && filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl text-gray-700 mb-4">No products found matching "{searchQuery}"</p>
            <button 
              onClick={() => navigate('/trending')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Browse All Electronics
            </button>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col" 
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative bg-gray-100">
                <img 
                  src={product.imageUrl || product.url} 
                  alt={product.title} 
                  className="w-full h-full transition-transform hover:scale-105"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
                {product.videoId && (
                  <div 
                    className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Opening video for product ${product.id}: ${product.videoId}`);
                      openVideoPopup(e, product.videoId);
                    }}
                    aria-label="Play video"
                    data-product-id={product.id}
                    data-video-id={product.videoId}
                  >
                    <div className="w-20 h-20 rounded-full bg-red-600 bg-opacity-90 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                      <FaPlay size={30} className="text-white ml-2" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`${i < (product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`} size={14} />
                  ))}
                </div>
                <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 flex-grow">{product.title}</h3>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-lg text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex-grow flex items-center justify-center gap-2 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      View Details
                    </button>
                    {product.videoId && (
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Opening video from button for product ${product.id}: ${product.videoId}`);
                          openVideoPopup(e, product.videoId);
                        }}
                        aria-label="Play video"
                        data-product-id={product.id}
                        data-video-id={product.videoId}
                      >
                        <FaPlay size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        
        {sortedProducts.length > 5 && (
          <div className="mt-12 text-center">
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition duration-300">
              Load More Products
            </button>
          </div>
        )}
      </section>

      {videoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeVideoPopup}>
          <div 
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl w-full max-w-5xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 z-10 transition-colors"
              onClick={closeVideoPopup}
              aria-label="Close video"
            >
              <FaTimes size={20} />
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&rel=0`}
                title="Product Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;