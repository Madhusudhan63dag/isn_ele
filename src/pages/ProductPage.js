import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaHeart, FaFacebookF, FaTwitter, FaPinterestP, FaGoogle, FaInstagram } from 'react-icons/fa';
import { Star, ShoppingCart, Truck, Shield, ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import productData from '../utils/data/product';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('description');
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, id]);
  
  useEffect(() => {
    const foundProduct = productData.productDetailData.find(
      (p) => p.id === parseInt(id)
    );
    setProduct(foundProduct);
    
    // Set default active tab if there are tabs defined for this product
    if (foundProduct?.tabs?.length > 0) {
      setActiveTab(foundProduct.tabs[0].id);
    }
  }, [id]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product && product.inStock) {
      addToCart({ 
        id: product.id, 
        title: product.title, 
        price: parseFloat(product.price.replace(/[^\d.]/g, '')),
        images: product.images,
      }, quantity);
    }
  };

  // Function to safely render HTML content from product tabs
  const renderTabContent = (content) => {
    return { __html: content };
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-[#0062ff] border-r-[#0062ff] border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Extract tabs from product if available, or use a fallback for backward compatibility
  const productTabs = product.tabs || [
    {
      id: 'description',
      label: 'Description',
      content: `<div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-lg mb-3 text-gray-800">WHY YOU'LL LOVE IT</h3>
          <div class="text-gray-700 space-y-4">
            <p>${product.whyLoveIt}</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-3 text-gray-800">FEATURES</h3>
          <div class="text-gray-700">
            <ul class="list-disc pl-5 space-y-2">
              ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`
    },
    {
      id: 'specs',
      label: 'Specifications',
      content: `<div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-lg mb-3 text-gray-800">TECHNICAL SPECIFICATIONS</h3>
          <div class="text-gray-700">
            <p>Product technical specifications</p>
          </div>
        </div>
      </div>`
    },
    {
      id: 'reviews',
      label: 'Reviews',
      content: `<div>
        <p>Product reviews content</p>
      </div>`
    }
  ];

  return (
    <>
      <SEO 
        title={`${product.title} - Tech Store`}
        description={product.whyLoveIt.substring(0, 160)}
        canonical={`https://techstore.com/product/${id}`}
        meta={{
          'og:image': product.images[0],
          'product:price:amount': parseFloat(product.price.replace(/[^\d.]/g, '')),
          'product:price:currency': 'USD',
        }}
      />
      <div className="bg-[#f9f9f9] min-h-screen pb-12">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto py-3 px-4">
            <div className="flex text-sm text-gray-500">
              <a href="/" className="hover:text-[#0062ff]">Home</a>
              <span className="mx-2">/</span>
              <a href="/trending?category=all" className="hover:text-[#0062ff]">Products</a>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Main Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Images */}
              <div className="lg:w-2/5">
                <div className="relative bg-white rounded-lg border border-gray-100 mb-4 flex items-center justify-center h-96">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#0062ff] text-white text-xs font-bold px-3 py-1 rounded-full">{product.badge}</span>
                    </div>
                  )}
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain p-6"
                  />
                  
                  {/* Image navigation arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button 
                        className="absolute left-2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-[#0062ff]"
                        onClick={() => setSelectedImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                      >
                        <ArrowLeft size={18} />
                      </button>
                      <button 
                        className="absolute right-2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-[#0062ff]"
                        onClick={() => setSelectedImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                      >
                        <ArrowRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 justify-center">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`border cursor-pointer p-1 rounded-md ${
                        selectedImage === index 
                          ? 'border-[#0062ff] shadow-md' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - view ${index + 1}`} 
                        className="w-16 h-16 object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-3/5">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                
                {/* Reviews Preview */}
                <div className="flex items-center mb-4">
                  <div className="flex">{
                    [1, 2, 3, 4, 5].map((star) => (
                      <Star 
                      key={star}
                      size={16}
                      className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))
                    }
                  </div>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through ml-3">{product.oldPrice}</span>
                  )}
                </div>
                
                {/* Short Description */}
                <div className="mb-6 text-gray-600">
                  <p>{product.whyLoveIt.split('.')[0] + '.'}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6"></div>
                
                {/* Quantity Selector and Add to Cart */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <label htmlFor="quantity" className="mr-4 font-medium text-gray-700">Quantity:</label>
                      <div className="flex border border-gray-300 rounded">
                        <button 
                          className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100 text-gray-700"
                          onClick={decrementQuantity}
                        >
                          -
                        </button>
                        <input 
                          id="quantity" 
                          type="number" 
                          className="w-12 text-center outline-none" 
                          value={quantity} 
                          readOnly 
                        />
                        <button 
                          className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100 text-gray-700"
                          onClick={incrementQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      className={`flex items-center justify-center gap-2 ${
                        product.inStock 
                          ? 'bg-[#0062ff] hover:bg-[#0048cc]' 
                          : 'bg-gray-400 cursor-not-allowed'
                      } text-white py-3 px-8 rounded-md font-medium`}
                      disabled={!product.inStock}
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart size={18} />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
                
                {/* Shipping and Security */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Truck size={20} className="text-[#0062ff]" />
                    <div>
                      <p className="font-medium text-sm">Free Shipping</p>
                      <p className="text-xs text-gray-500">On orders over ₹50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Shield size={20} className="text-[#0062ff]" />
                    <div>
                      <p className="font-medium text-sm">Secure Checkout</p>
                      <p className="text-xs text-gray-500">100% Protected by PayPal</p>
                    </div>
                  </div>
                </div>
                
                {/* Share */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Share:</span>
                    <a href="https://www.facebook.com/people/Iandicompany-Ele/pfbid06gGxGPRZef5P714qioE5TPMWWxuCa9W9ehMsUXcUsmMLZdKAKhA8MXSvKF22nJvDl/">
                    <button  className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#0062ff] hover:text-white flex items-center justify-center transition-colors">
                      <FaFacebookF />
                    </button>
                    </a>
                    <a href="https://x.com/myiandiofficial">
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-colors">
                      <FaTwitter />
                    </button>
                    </a>
                    <a href='https://www.instagram.com/myiandiofficial'>
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#E60023] hover:text-white flex items-center justify-center transition-colors">
                      <FaInstagram />
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs Section - UPDATED to use dynamic data */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {productTabs.map((tab) => (
                <button 
                  key={tab.id}
                  className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'text-[#0062ff] border-b-2 border-[#0062ff]' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  id={`tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {productTabs.map((tab) => (
                <div 
                  key={tab.id} 
                  className={activeTab === tab.id ? 'block' : 'hidden'}
                  dangerouslySetInnerHTML={renderTabContent(tab.content)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;