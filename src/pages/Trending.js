import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from '../components/Card';
import productData from '../utils/data/product';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar, FaShoppingCart } from 'react-icons/fa';

const Trending = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategoryParam = queryParams.get('category');
  const searchQuery = queryParams.get('search');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);
  
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [prevBanner, setPrevBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryParam || 'all');
  const [sortOption, setSortOption] = useState('default');
  
  const trending = productData.trending;
  const allProducts = productData.productData;
  const trendingPageData = productData.trendingpage;
  
  const selectedTrendingData = selectedCategoryParam 
    ? trendingPageData.find(item => item.title.toLowerCase().replace(' ', '-') === selectedCategoryParam)
    : null;
  
  const banners = selectedTrendingData?.banner || [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Latest Tech Innovations",
      subheading: "Discover cutting-edge electronics that define the future"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Best Selling Gadgets",
      subheading: "The electronic devices our customers can't get enough of"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Smart Home Solutions",
      subheading: "Transform your living space with intelligent technology"
    }
  ];

  const featuredProductsRef = useRef(null);
  const [featuredPosition, setFeaturedPosition] = useState(0);
  
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
  
  const scrollLeftFeatured = () => {
    if (featuredProductsRef.current) {
      const containerWidth = featuredProductsRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      featuredProductsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = featuredProductsRef.current.scrollLeft;
        const maxScroll = featuredProductsRef.current.scrollWidth - featuredProductsRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (allProducts.length / 3 - 1));
        setFeaturedPosition(position);
      }, 300);
    }
  };

  const scrollRightFeatured = () => {
    if (featuredProductsRef.current) {
      const containerWidth = featuredProductsRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      featuredProductsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = featuredProductsRef.current.scrollLeft;
        const maxScroll = featuredProductsRef.current.scrollWidth - featuredProductsRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (allProducts.length / 3 - 1));
        setFeaturedPosition(position);
      }, 300);
    }
  };

  const filteredProducts = useMemo(() => {
    let products = [];
    
    if (selectedTrendingData) {
      products = selectedTrendingData.products;
    } else if (selectedCategory === 'all') {
      products = allProducts;
    } else {
      products = allProducts.filter(product => {
        const productTitle = product.title.toLowerCase();
        const productFeatures = product.features 
          ? product.features.map(f => f.title.toLowerCase()).join(' ')
          : '';
          
        return productTitle.includes(selectedCategory.toLowerCase()) ||
               productFeatures.includes(selectedCategory.toLowerCase());
      });
    }
    
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      return products.filter(product => {
        const title = product.title.toLowerCase();
        const description = product.description ? product.description.toLowerCase() : '';
        const features = product.features 
          ? product.features.map(f => f.title.toLowerCase()).join(' ')
          : '';
        
        return title.includes(searchTerm) || 
               description.includes(searchTerm) || 
               features.includes(searchTerm);
      });
    }
    
    return products;
  }, [selectedTrendingData, selectedCategory, allProducts, searchQuery]);

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

  const categories = useMemo(() => {
    const baseCategories = [
      { id: 'all', name: 'All Products' },
      ...trendingPageData.map(category => ({
        id: category.title.toLowerCase().replace(' ', '-'),
        name: category.title
      })),
      { id: 'joints', name: 'Joint Health' },
      { id: 'slim', name: 'Weight Management' },
      { id: 'psorigo', name: 'Skin Care' }
    ];

    return Array.from(
      new Map(baseCategories.map(item => [item.id, item])).values()
    );
  }, [trendingPageData]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
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

      {!selectedTrendingData && (
        <section className="container mx-auto py-10 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Categories</h2>
            <a href="/categories" className="text-blue-600 hover:text-blue-800 font-medium">View All</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trending.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 text-center cursor-pointer"
                onClick={() => navigate(`/trending?category=${card.id}`)}
              >
                <div className="w-20 h-20 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                  <img 
                    src={card.imageUrl || `https://via.placeholder.com/80?text=${card.title.charAt(0)}`} 
                    alt={card.title} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
                <h3 className="font-medium text-gray-800">{card.title}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {searchQuery 
            ? `Search Results for "${searchQuery}"`
            : selectedTrendingData 
              ? `${selectedTrendingData.title}` 
              : "Trending Electronics"
          }
        </h2>
        
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
              <div className="relative h-48 bg-gray-100 p-4">
                <img 
                  src={product.imageUrl || product.url} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-transform hover:scale-105"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`${i < (product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`} size={14} />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews || '24'} reviews)</span>
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
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {sortedProducts.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition duration-300">
              Load More Products
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Trending;