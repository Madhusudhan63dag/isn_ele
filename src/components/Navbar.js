import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Menu, Search, User, ShoppingCart, X, Zap, Heart, HelpCircle, MapPin, ChevronDown, Phone, Camera, Tv } from 'lucide-react'
import logo from '../utils/image/navbar_logo.png'
import logo_mob from '../utils/image/navbar_mob.jpg'
import { useCart } from '../context/CartContext';
import MiniCart from './MiniCart';
import { useNavigate } from 'react-router-dom';
import productData from '../utils/data/product';
import navbar from '../utils/data/navbar'; // Import the centralized navigation data

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const { cartItemCount, toggleCart } = useCart();
  const phoneRef = useRef(null);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  
  // Get all products for search functionality
  const allProducts = useMemo(() => {
    // Start with main product data
    let products = [...productData.productData];
    
    // Add products from trendingpage data
    productData.trendingpage.forEach(category => {
      if (category.products) {
        category.products.forEach(product => {
          // Check if product already exists to avoid duplicates
          if (!products.some(p => p.id === product.id)) {
            products.push(product);
          }
        });
      }
    });
    
    // Add product detail data
    productData.productDetailData.forEach(product => {
      if (!products.some(p => p.id === product.id)) {
        products.push(product);
      }
    });
    
    return products;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopMenuOpen(false);
      }
      
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 1) {
      // Enhanced search logic to match products by title
      const suggestions = allProducts
        .filter(product => {
          const title = product.title ? product.title.toLowerCase() : '';
          const searchValue = value.toLowerCase();
          return title.includes(searchValue);
        })
        .slice(0, 5);
      
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/trending?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSuggestions(false);
      setShowMobileSearch(false);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    // Navigate to product page if it has an ID, otherwise search for the title
    if (suggestion.id) {
      navigate(`/product/${suggestion.id}`);
    } else {
      navigate(`/trending?search=${encodeURIComponent(suggestion.title.trim())}`);
    }
    setSearchTerm('');
    setShowSuggestions(false);
    setShowMobileSearch(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 (903) 094-5444');
    setShowPhonePopup(true);
    
    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPhonePopup(false);
    }, 2000);
  };


  return (
    <header className="sticky top-0 w-full z-50">
      <div className="w-full bg-[#121212] text-gray-300 py-1 px-2 sm:px-4 text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 ">
            <a href='https://maps.app.goo.gl/qhUpTDLFPoBSH5d29' target="_blank" rel="noopener noreferrer" className='hover:text-orange-500 duration-200 '>
            <div className="hidden sm:flex items-center gap-1">
              <MapPin size={14} />
              <span>Store Locator</span>
            </div>
            </a>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span 
                    onClick={handleCopyPhone}
                      className="cursor-pointer hover:text-orange-500 transition-colors"
                      title="Click to copy phone number"
                    >+91 (903) 094-5444</span>
                    {showPhonePopup && (
                      <div className="absolute top-5 left-48 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Phone number copied!
                      </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4 hover:text-orange-500">
            <a href="/contact" className="hover:text-white hidden sm:inline">Support</a>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] shadow-md">
        <div className="container mx-auto py-3 sm:py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden flex items-center text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? 
                  <X size={24} className="sm:w-6 sm:h-6" /> : 
                  <Menu size={24} className="sm:w-6 sm:h-6" />
                }
              </button>

              <a href="/" className="flex items-center">
                <img src={logo} alt="Tech Store" className="h-8 sm:h-10 md:h-12" />
              </a>
            </div>

            <div className="flex-grow max-w-xl mx-4">
              <div className="relative">
                <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for products, brands and more..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 text-sm rounded-l-md bg-[#262626] border-0 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit" 
                    className="p-2 text-white bg-orange-500 hover:bg-orange-300 rounded-r-md"
                  >
                    <Search size={20} />
                  </button>
                </form>
                
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div 
                    ref={suggestionsRef}
                    className="absolute top-full left-0 w-full mt-1 bg-[#262626] border border-[#333] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto"
                  >
                    <ul>
                      {searchSuggestions.map((suggestion, index) => (
                        <li 
                          key={suggestion.id || index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-2 hover:bg-[#333] cursor-pointer flex items-center text-gray-300"
                        >
                          <div className="w-8 h-8 mr-2 bg-[#333] rounded flex items-center justify-center">
                            <img 
                              src={suggestion.url || suggestion.imageUrl} 
                              alt={suggestion.title} 
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="block text-sm text-white">{suggestion.title}</span>
                            <span className="block text-xs text-blue-400">₹{suggestion.price}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/*               
              <a href="/wishlist" className="text-white hidden md:flex flex-col items-center">
                <Heart size={20} />
                <span className="text-xs">Wishlist</span>
              </a> */}
              
              <button 
                onClick={toggleCart}
                className="relative flex flex-col items-center text-white"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <ShoppingCart size={22} />
                <span className="text-xs">Cart</span>
                {cartItemCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-[#ff3e3e] rounded-full">
                    {cartItemCount}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-[#262626] text-white border-t border-[#333] hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex">
            {/* <li className="group relative">
              <a 
                href="/flash-deals" 
                className="flex items-center gap-1 py-3 px-4 font-medium text-[#ff3e3e] hover:bg-[#333]"
              >
                <Zap size={16} className="text-[#ff3e3e]" />
                <span>Flash Deals</span>
              </a>
            </li> */}
            
            {navbar.map((category, index) => (
              <li 
                key={category.id}
                className="group relative"
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <a 
                  // href={category.link}
                  className="flex items-center gap-1 py-3 px-4 hover:bg-[#333]"
                >
                  <span>{category.name}</span>
                  <ChevronDown size={14} />
                </a>
                
                {category.subItems && (
                  <div 
                    className={`absolute left-0 top-full w-full sm:w-auto bg-[#262626] border border-[#333] shadow-xl min-w-[500px] transform origin-top transition-all duration-200 ${
                      activeCategory === category.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                      {category.subItems.map((item) => (
                        <a 
                          key={item.id} 
                          href={item.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors block relative pl-4"
                        >
                          <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-blue-500"></span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            
            {/* <li className="ml-auto">
              <a 
                href="/help" 
                className="flex items-center gap-1 py-3 px-4 hover:bg-[#333]"
              >
                <HelpCircle size={16} />
                <span>Help</span>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>

      {showMobileSearch && (
        <div className="lg:hidden bg-[#1a1a1a] p-3 shadow-md">
          <form onSubmit={handleSearchSubmit} className="flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 px-4 py-2 text-sm rounded-l-md bg-[#262626] border-0 text-white"
              autoFocus
            />
            <button 
              type="submit" 
              className="p-2 text-white bg-orange-500 hover:bg-orange-300 rounded-r-md"
            >
              <Search size={18} />
            </button>
            
            {showSuggestions && searchSuggestions.length > 0 && (
              <div 
                className="absolute top-full left-0 w-full mt-1 bg-[#262626] border border-[#333] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto"
              >
                <ul>
                  {searchSuggestions.map((suggestion, index) => (
                    <li 
                      key={suggestion.id || index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 hover:bg-[#333] cursor-pointer flex items-center text-gray-300"
                    >
                      <div className="w-8 h-8 mr-2 bg-[#333] rounded">
                        <img 
                          src={suggestion.url || suggestion.imageUrl} 
                          alt={suggestion.title} 
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="block text-sm text-white">{suggestion.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/90 z-50 overflow-y-auto">
          <div className="sticky top-0 flex justify-between items-center bg-[#1a1a1a] p-4 border-b border-[#333]">
            <a href="/">
              <img src={logo} alt="Tech Store" className="h-8 sm:h-10" />
            </a>
            <button 
              onClick={closeMobileMenu}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-around mb-6 border-b border-[#333] pb-6">
              {/* <a href="/wishlist" className="flex flex-col items-center text-white">
                <Heart size={22} className="mb-1" />
                <span className="text-sm">Wishlist</span>
              </a> */}
              <button
                onClick={toggleCart} 
                className="flex flex-col items-center text-white relative"
              >
                <ShoppingCart size={22} className="mb-1" />
                <span className="text-sm">Cart</span>
                {cartItemCount > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-[#ff3e3e] rounded-full">
                    {cartItemCount}
                  </div>
                )}
              </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="flex items-center relative mb-6">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-1 px-4 py-3 rounded-l-md bg-[#262626] border-0 text-white text-base"
              />
              <button 
                type="submit" 
                className="p-3 text-white bg-orange-500 hover:bg-orange-300 rounded-r-md"
              >
                <Search size={20} />
              </button>
            </form>
            
            {/* <a 
              href="/flash-deals" 
              className="flex items-center justify-between p-3 mb-4 bg-gradient-to-r from-[#5c0000] to-[#8a0000] rounded-md"
            >
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#ff3e3e]" />
                <span className="font-bold text-white">Flash Deals</span>
              </div>
              <span className="text-white text-sm bg-[#ff3e3e] px-2 py-1 rounded">HOT</span>
            </a> */}
            
            <div className="space-y-4">
              {navbar.map(category => (
                <div key={category.id} className="border-b border-[#333] pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <a href={category.link} className="text-white font-medium text-lg">
                      {category.name}
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {category.subItems && category.subItems.map(item => (
                      <a 
                        key={item.id}
                        href={item.link} 
                        className="text-gray-400 hover:text-blue-400 relative pl-4"
                        onClick={closeMobileMenu}
                      >
                        <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 border-t border-[#333] pt-4">
              <div className="grid grid-cols-2 gap-4">
                <a href="/help" className="text-gray-300 flex items-center gap-2">
                  <HelpCircle size={16} />
                  <span>Help Center</span>
                </a>
                <a href="/support" className="text-gray-300 flex items-center gap-2">
                  <Phone size={16} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <MiniCart />
    </header>
  )
}

export default Navbar