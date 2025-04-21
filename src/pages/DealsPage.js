import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import productData from '../utils/data/product';
import { useCart } from '../context/CartContext';
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaRegClock, FaShieldAlt, FaCheckCircle, FaTruckMoving, FaChevronRight } from 'react-icons/fa';

const DealsPage = () => {
  const { dealType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [sortOption, setSortOption] = useState('default');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [prevBanner, setPrevBanner] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get deal data from the centralized product data
  const dealMap = productData.dealsData;

  // Get current deal info
  const currentDeal = dealMap[dealType] || null;

  // Get banners for current deal
  const banners = currentDeal?.banners || [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Deal Not Available",
      subheading: "Please check our other offers"
    }
  ];

  // Banner animation effects
  useEffect(() => {
    if (banners.length <= 1) return;

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

  // Filter products based on the deal type
  const filteredProducts = useMemo(() => {
    if (!currentDeal) {
      return [];
    }

    return productData.productData.filter(product =>
      currentDeal.productIds.includes(product.id)
    );
  }, [currentDeal]);

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    if (!filteredProducts.length) return [];

    let sortedItems = [...filteredProducts];

    switch (sortOption) {
      case 'price-asc':
        return sortedItems.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sortedItems.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sortedItems;
    }
  }, [filteredProducts, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle navigation to product page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Handle navigation to bundle offer page
  const handleBundleClick = () => {
    if (dealType === 'entertainment-bundle') {
      navigate('/offers/bundle');
    }
  };

  const handleAddToCart = (product, event) => {
    event.stopPropagation();

    // Calculate discounted price
    const originalPrice = product.price;
    const discount = parseFloat(currentDeal.discount.replace(/[^\d.]/g, '')) / 100;
    const discountedPrice = originalPrice * (1 - discount);

    addToCart({
      id: product.id,
      title: product.title,
      price: discountedPrice,
      image: product.imageUrl || product.url
    });
  };

  if (!currentDeal) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Deal Not Found</h2>
          <p className="text-gray-600 mb-6">The deal you're looking for is not available.</p>
          <button
            onClick={() => navigate('/deals')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            View All Deals
          </button>
        </div>
      </div>
    );
  }

  // Calculate discount percentage for display
  const getDiscountPercentage = (originalPrice, discountedPrice) => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner Section */}
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
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-lg">
                    <span className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md mb-4">LIMITED TIME OFFER</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      {banner.heading || currentDeal.title}
                    </h1>
                    <p className="text-white text-lg mb-8">
                      {banner.subheading || `Save ${currentDeal.discount} on selected products - Limited time only!`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {banners.length > 1 && (
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
        )}
      </section>

      <div className="container mx-auto py-10 px-4">
        {/* Deal Info Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{currentDeal.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{currentDeal.description}</p>
          
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md inline-flex items-center">
                <FaRegClock className="mr-2" />
                <span className="font-medium">Limited Time Offer - Ends in 3 days</span>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Deal Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaTruckMoving className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-500">On orders above ₹1000</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Extended Warranty</h4>
                <p className="text-sm text-gray-500">Additional protection</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaCheckCircle className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Genuine Products</h4>
                <p className="text-sm text-gray-500">100% authentic items</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaRegClock className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium">24/7 Support</h4>
                <p className="text-sm text-gray-500">Round the clock assistance</p>
              </div>
            </div>
          </div>

          {/* Special Deal Banner */}
          {currentDeal.isBundle && (
            <div className="bg-gradient-to-r from-[#001e3c] to-[#03396c] rounded-lg shadow-lg p-6 mb-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={handleBundleClick}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 text-center mb-6 md:mb-0">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-md inline-block mb-2">BUNDLE OFFER</div>
                  <div className="text-3xl font-bold text-white mb-1">{currentDeal.bundlePrice}</div>
                  <div className="text-gray-300 line-through">{currentDeal.originalPrice}</div>
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-md mt-2 font-bold inline-block">
                    SAVE {getDiscountPercentage(
                      parseFloat(currentDeal.originalPrice.replace(/[^\d.]/g, '')),
                      parseFloat(currentDeal.bundlePrice.replace(/[^\d.]/g, ''))
                    )}%
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Ultimate Entertainment Bundle</h3>
                  <p className="text-gray-200 mb-6">
                    Get a premium OLED TV and PlayStation 5 bundle for the complete home entertainment experience. 
                    Perfect for gaming, movies, and streaming – all at one incredible price.
                  </p>
                  <button
                    className="bg-white hover:bg-gray-100 text-blue-700 font-medium px-8 py-3 rounded-md transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBundleClick();
                    }}
                  >
                    View Bundle Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => {
            // Calculate discounted price
            const originalPrice = product.price;
            const discount = parseFloat(currentDeal.discount.replace(/[^\d.]/g, '')) / 100;
            const discountedPrice = originalPrice * (1 - discount);

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-64 bg-gray-100">
                    <img
                      src={product.imageUrl || product.url}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                    -{Math.round(discount * 100)}%
                  </div>

                  {/* Quick action buttons */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                      title="Quick view"
                    >
                      <FaEye className="text-gray-800" />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                      onClick={(e) => handleAddToCart(product, e)}
                      title="Add to cart"
                    >
                      <FaShoppingCart className="text-gray-800" />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="Add to wishlist"
                    >
                      <FaHeart className="text-gray-800" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"} size={14} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs ml-2">({product.reviews || "42"} reviews)</span>
                  </div>

                  <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description?.substring(0, 70)}...</p>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-lg font-bold text-blue-600">₹{discountedPrice.toLocaleString()}</div>
                      <div className="text-gray-500 text-sm line-through">₹{product.price.toLocaleString()}</div>
                    </div>
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-medium mb-2">No products available in this deal</h3>
            <p className="text-gray-600 mb-6">Try checking out our other deals and offers</p>
            <button
              onClick={() => navigate('/deals')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse All Deals
            </button>
          </div>
        )}
        
        {/* More deals suggestion */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">More Deals You Might Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(dealMap)
              .filter(([key]) => key !== dealType)
              .slice(0, 3)
              .map(([key, deal]) => (
                <div 
                  key={key} 
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => navigate(`/deals/${key}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={deal.banners[0].imageUrl} 
                      alt={deal.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-medium text-red-500 mb-1">{deal.discount} OFF</div>
                    <h4 className="font-bold text-lg mb-2">{deal.title}</h4>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      View Deal <FaChevronRight className="ml-1 text-xs" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
