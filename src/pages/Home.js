import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import images from '../utils/data/icons';
import productData from '../utils/data/product';
import bannerData from '../utils/data/banner';
import { useNavigate, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Zap, ChevronRight, ChevronLeft, Star, TrendingUp, Package, Award, Clock } from 'lucide-react';

const Home = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [prevBanner, setPrevBanner] = useState(0);
  const cards8 = [1, 2, 3, 4, 5, 6, 7, 8];
  const trending = productData.trending;
  const newproduct = productData.newproduct;
  const brand = productData.brand;
  const itemOfWeekProducts = productData.productData;
  const banners = bannerData.homeBanners;
  const newCardsRef = useRef(null);
  const dietCardsRef = useRef(null);
  const brandCardsRef = useRef(null);
  const itemOfWeekRef = useRef(null);
  const [newCardsPosition, setNewCardsPosition] = useState(0);
  const [itemOfWeekPosition, setItemOfWeekPosition] = useState(0);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  
  const handleTrendingCardClick = (card, event) => {
    if (event) {
      event.preventDefault();
    }
    navigate(`/trending?category=${card.id}`);
  };

  const handleBrandClick = (brand, event) => {
    if (event) {
      event.preventDefault();
    }
    
    const brandToDealMap = {
      "Sampoorn Arogya": "sampoorn-arogya",
      "Dr. Joints": "dr-joints",
      "Beyondslim": "beyondslim",
      "PSORIGO": "psorigo"
    };
    
    const dealRoute = brandToDealMap[brand.name.trim()];
    
    if (dealRoute) {
      navigate(`/deals/${dealRoute}`);
    }
  };

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

  const scrollLeftNew = () => {
    if (newCardsRef.current) {
      const containerWidth = newCardsRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      newCardsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = newCardsRef.current.scrollLeft;
        const maxScroll = newCardsRef.current.scrollWidth - newCardsRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
        setNewCardsPosition(position);
      }, 300);
    }
  };

  const scrollRightNew = () => {
    if (newCardsRef.current) {
      const containerWidth = newCardsRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      newCardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = newCardsRef.current.scrollLeft;
        const maxScroll = newCardsRef.current.scrollWidth - newCardsRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
        setNewCardsPosition(position);
      }, 300);
    }
  };

  const scrollLeftNew_Two = () => {
    if (itemOfWeekRef.current) {
      const containerWidth = itemOfWeekRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      itemOfWeekRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = itemOfWeekRef.current.scrollLeft;
        const maxScroll = itemOfWeekRef.current.scrollWidth - itemOfWeekRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
        setItemOfWeekPosition(position);
      }, 300);
    }
  };

  const scrollRightNew_Two = () => {
    if (itemOfWeekRef.current) {
      const containerWidth = itemOfWeekRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      itemOfWeekRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const scrollPosition = itemOfWeekRef.current.scrollLeft;
        const maxScroll = itemOfWeekRef.current.scrollWidth - itemOfWeekRef.current.clientWidth;
        const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
        setItemOfWeekPosition(position);
      }, 300);
    }
  };

  const handleNewCardsScroll = () => {
    if (newCardsRef.current) {
      const scrollPosition = newCardsRef.current.scrollLeft;
      const maxScroll = newCardsRef.current.scrollWidth - newCardsRef.current.clientWidth;
      const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
      setNewCardsPosition(position);
    }
  };

  const handleItemOfWeekScroll = () => {
    if (itemOfWeekRef.current) {
      const scrollPosition = itemOfWeekRef.current.scrollLeft;
      const maxScroll = itemOfWeekRef.current.scrollWidth - itemOfWeekRef.current.clientWidth;
      const position = Math.round((scrollPosition / maxScroll) * (cards8.length / 4 - 1));
      setItemOfWeekPosition(position);
    }
  };

  useEffect(() => {
    const newCardsElement = newCardsRef.current;
    if (newCardsElement) {
      newCardsElement.addEventListener('scroll', handleNewCardsScroll);
    }
    return () => {
      if (newCardsElement) {
        newCardsElement.removeEventListener('scroll', handleNewCardsScroll);
      }
    };
  }, []);

  useEffect(() => {
    const itemOfWeekElement = itemOfWeekRef.current;
    if (itemOfWeekElement) {
      itemOfWeekElement.addEventListener('scroll', handleItemOfWeekScroll);
    }
    return () => {
      if (itemOfWeekElement) {
        itemOfWeekElement.removeEventListener('scroll', handleItemOfWeekScroll);
      }
    };
  }, [itemOfWeekRef.current]);


  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <SEO title="Electronics & Tech Store | Latest Gadgets & Devices" description="Shop the latest electronics, gadgets, smartphones, laptops and tech accessories. Find great deals on trusted brands with fast shipping." />
      
      {/* Hero Banner Slider */}
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
                className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-lg">
                      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
                        Next-Gen Tech <br />
                        <span className="text-orange-500">Best Deals</span>
                      </h2>
                      <p className="text-gray-200 text-sm md:text-base mb-4 md:mb-8">
                        Discover the latest electronics with exclusive offers
                      </p>
                      {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors flex items-center">
                        Shop Now <ChevronRight size={16} className="ml-2" />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentBanner === index ? 'bg-orange-500' : 'bg-gray-400'
              }`}
              onClick={() => goToBanner(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Feature Categories Bar */}
      <div className="bg-[#262626] text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around overflow-x-auto scrollbar-hide">
            {/* <a href="/deals/flash" className="flex items-center min-w-max px-3 py-1">
              <Zap size={18} className="text-[#ff3e3e] mr-2" />
              <span className="whitespace-nowrap">Flash Deals</span>
            </a> */}
            <a href="/trending" className="flex items-center min-w-max px-3 py-1">
              <TrendingUp size={18} className="text-orange-500 mr-2" />
              <span className="whitespace-nowrap">Trending Now</span>
            </a>
            <a href="/trending" className="flex items-center min-w-max px-3 py-1">
              <Package size={18} className="text-orange-500 mr-2" />
              <span className="whitespace-nowrap">New Arrivals</span>
            </a>
            <a href="/trending" className="hidden sm:flex items-center px-3 py-1">
              <Award size={18} className="text-orange-500 mr-2" />
              <span className="whitespace-nowrap">Top Brands</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1a1a1a] font-bold text-xl md:text-2xl lg:text-3xl flex items-center">
              <TrendingUp size={24} className="text-orange-500 mr-2" /> Trending Categories
            </h2>
            <a href="/trending" className="text-orange-500 hover:underline flex items-center text-sm">
              View All <ChevronRight size={16} className="ml-1"/>
            </a>
          </div>
          
          <div className="flex justify-center gap-3 md:gap-5">
            {trending.map((card, index) => (
              <div 
                key={index} 
                onClick={(e) => handleTrendingCardClick(card, e)} 
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <div className=" overflow-hidden">
                  <Card key={index} card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="bg-[#f5f5f5] py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1a1a1a] font-bold text-xl md:text-2xl lg:text-3xl flex items-center">
              <Package size={24} className="text-orange-500 mr-2" /> New Arrivals
            </h2>
            {/* <a href="/trending?category=new-arrivals" className="text-orange-500 hover:underline flex items-center text-sm">
              View All <ChevronRight size={16} className="ml-1"/>
            </a> */}
          </div>
          
          <div className="absolute top-1/2 left-0 z-10 w-full flex justify-between px-2 md:px-4">
            <button
              onClick={scrollLeftNew}
              className="bg-white shadow-lg text-[#1a1a1a] rounded-full p-2 md:p-3 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollRightNew}
              className="bg-white shadow-lg text-[#1a1a1a] rounded-full p-2 md:p-3 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>

          <div
            ref={newCardsRef}
            className="flex overflow-x-auto gap-3 md:gap-5 pb-6 scrollbar-hide px-2 md:px-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {newproduct.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center transition-all duration-300 cursor-pointer"
                style={{
                  width: 'calc(50% - 6px)',
                  minWidth: '150px',
                  maxWidth: '280px',
                  borderRadius: '8px'
                }}
                onClick={() => handleProductClick(card.id)}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all h-full">
                  <Card2 card={card} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(cards8.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${newCardsPosition === index ? 'bg-orange-500 w-4 md:w-5' : 'bg-gray-300'}`}
                onClick={() => {
                  if (newCardsRef.current) {
                    const scrollAmount = (newCardsRef.current.scrollWidth / Math.ceil(cards8.length / 4)) * index;
                    newCardsRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                    setNewCardsPosition(index);
                  }
                }}
                aria-label={`Go to card group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Video Showcase Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">See Our Products in Action</h2>
            <p className="max-w-2xl mx-auto text-blue-100">Watch how our innovative products can transform your experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Map through featured videos from the data file */}
            {productData.videos.featured.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-blue-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                  {video.productId && (
                    <a 
                      href={`/product/${video.productId}`} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      View Product
                    </a>
                  )}
                  {!video.productId && (
                    <a 
                      href="/about" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="bg-[#1a1a1a] py-8 md:py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-[#333] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <line x1="12" y1="20" x2="12" y2="20"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders over ₹3000</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#333] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Best Quality</h3>
                <p className="text-sm text-gray-400">Premium products</p>
              </div>
            </div>
            
            {/* <div className="flex items-center">
              <div className="bg-[#333] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">1 Year Warranty</h3>
                <p className="text-sm text-gray-400">Extended coverage</p>
              </div>
            </div>
             */}
            <div className="flex items-center">
              <div className="bg-[#333] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">24/7 Support</h3>
                <p className="text-sm text-gray-400">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Item of the Week Section */}
      <section className="bg-[#f5f5f5] py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-[#1a1a1a] font-bold text-xl md:text-2xl lg:text-3xl flex items-center">
                <Star size={24} className="text-[#ff3e3e] mr-2" /> Deal of the Week
              </h2>
              <div className="hidden md:flex items-center ml-4 bg-[#ff3e3e] text-white px-2 py-1 rounded text-sm">
                <Clock size={14} className="mr-1" /> Limited Time Offer
              </div>
            </div>
            {/* <a href="/deals/special-offers" className="text-orange-500 hover:underline flex items-center text-sm">
              All Offers <ChevronRight size={16} className="ml-1"/>
            </a> */}
          </div>
          
          <div className="absolute top-1/2 left-0 z-10 w-full flex justify-between px-2 md:px-4">
            <button
              onClick={scrollLeftNew_Two}
              className="bg-white shadow-lg text-[#1a1a1a] rounded-full p-2 md:p-3 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollRightNew_Two}
              className="bg-white shadow-lg text-[#1a1a1a] rounded-full p-2 md:p-3 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>

          <div
            ref={itemOfWeekRef}
            className="flex overflow-x-auto gap-3 md:gap-5 pb-6 scrollbar-hide px-2 md:px-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {itemOfWeekProducts.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center transition-all duration-300 cursor-pointer"
                style={{
                  width: 'calc(100% - 16px)',
                  minWidth: '250px',
                  maxWidth: '100%',
                  borderRadius: '8px'
                }}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all">
                  <Card4 product={product} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(itemOfWeekProducts.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${itemOfWeekPosition === index ? 'bg-orange-500 w-4 md:w-5' : 'bg-gray-300'}`}
                onClick={() => {
                  if (itemOfWeekRef.current) {
                    const scrollAmount = (itemOfWeekRef.current.scrollWidth / Math.ceil(itemOfWeekProducts.length / 4)) * index;
                    itemOfWeekRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                    setItemOfWeekPosition(index);
                  }
                }}
                aria-label={`Go to card group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


