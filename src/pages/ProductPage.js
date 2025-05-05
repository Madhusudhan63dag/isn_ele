import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaHeart, FaFacebookF, FaTwitter, FaPinterestP, FaGoogle, FaInstagram, FaVideo, FaCheck, FaTimes, FaInfoCircle, FaPlus, FaMinus } from 'react-icons/fa';
import { Star, ShoppingCart, Truck, Shield, ArrowLeft, ArrowRight, ChevronDown, ChevronUp, PhoneCall, AlertTriangle, Info, CheckCircle } from 'lucide-react';
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
  const [expandedSpecs, setExpandedSpecs] = useState({}); // Track expanded specification sections

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

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const toggleSpecSection = (sectionName) => {
    setExpandedSpecs(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Function to safely render HTML content from product tabs
  const renderTabContent = (content) => {
    return { __html: content };
  };

  // Generate formatted specification tables for different product types
  const getSpecifications = (product) => {
    // Default specs sections that apply to most products
    const specs = [];

    // Basic specifications section for all products
    specs.push({
      title: "General Specifications",
      items: [
        { name: "Model", value: product.title },
        { name: "Brand", value: "I & I" },
        { name: "In the Box", value: product.inTheBox || `1 x ${product.title}, User Manual` }
      ]
    });

    // Camera-specific specifications
    if (product.title.toLowerCase().includes('camera') || product.title.toLowerCase().includes('vlog')) {
      specs.push({
        title: "Camera Specifications",
        items: [
          { name: "Video Resolution", value: "4K UHD (3840 × 2160)" },
          { name: "Frame Rate", value: "30fps at 4K, 60fps at 1080p" },
          { name: "Lens Type", value: "180° Rotatable Lens" },
          { name: "Night Vision", value: "Infrared up to 10m" },
          { name: "Display", value: "2.4″ IPS Touchscreen" }
        ]
      });
      
      specs.push({
        title: "Connectivity",
        items: [
          { name: "Mobile Network", value: "4G LTE" },
          { name: "Live Streaming", value: "Yes, with 4G connectivity" },
          { name: "Wi-Fi", value: "802.11 a/b/g/n/ac" },
          { name: "Bluetooth", value: "Bluetooth 5.0" }
        ]
      });
      
      specs.push({
        title: "Storage & Battery",
        items: [
          { name: "Storage Options", value: "MicroSD (Up to 256GB)" },
          // { name: "Cloud Storage", value: "AES-256 Encrypted Backup" },
          // { name: "Battery Type", value: "Li-ion, 5000mAh" },
          // { name: "Battery Life", value: "Up to 8 hours continuous recording" },
          { name: "Charging", value: "USB Type-C, Fast Charging" }
        ]
      });
    }
    
    // Projector-specific specifications
    if (product.title.toLowerCase().includes('projector')) {
      specs.push({
        title: "Display Specifications",
        items: [
          { name: "Display Technology", value: "LCD" },
          { name: "Native Resolution", value: "HD 720P (1280 × 720)" },
          { name: "Brightness", value: "200 ANSI Lumens" },
          { name: "Contrast Ratio", value: "2000:1" },
          { name: "Image Size", value: "30-150 inches" },
          { name: "Throw Ratio", value: "1.2:1" },
          { name: "Keystone Correction", value: "Auto (±40°)" }
        ]
      });
      
      specs.push({
        title: "Smart Features",
        items: [
          { name: "Operating System", value: "Android 13.0" },
          { name: "Preinstalled Apps", value: "Netflix, YouTube, Prime Video" },
          { name: "App Store", value: "Google Play Store" },
          { name: "Screen Mirroring", value: "Yes, Supports Miracast" }
        ]
      });
      
      specs.push({
        title: "Connectivity",
        items: [
          { name: "Wi-Fi", value: "Wi-Fi 6 (802.11 ax)" },
          { name: "Bluetooth", value: "Bluetooth 5.0" },
          { name: "Ports", value: "HDMI, USB, Audio-Out" },
          { name: "Speaker", value: "Built-in 3W Speakers with Cavity Design" }
        ]
      });
      
      specs.push({
        title: "Physical Specifications",
        items: [
          { name: "Dimensions", value: "12 × 8 × 3 cm" },
          { name: "Weight", value: "350g" },
          { name: "Power Supply", value: "DC 5V/3A" },
          { name: "Cooling System", value: "Ultra-quiet Fan" }
        ]
      });
    }
    
    // Physical specifications for all products if not already included
    if (!specs.some(section => section.title === "Physical Specifications")) {
      specs.push({
        title: "Physical Specifications",
        items: [
          { name: "Dimensions", value: product.dimensions || "Contact manufacturer for details" },
          { name: "Weight", value: product.weight || "Contact manufacturer for details" },
          { name: "Color", value: product.color || "As shown in image" }
        ]
      });
    }

    return specs;
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-[#0062ff] border-r-[#0062ff] border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  const specifications = getSpecifications(product);

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
                      onClick={() => handleImageClick(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - view ${index + 1}`} 
                        className="w-16 h-16 object-contain" 
                      />
                    </div>
                  ))}
                </div>
                
                {/* Product Video Section */}
                {product.videoUrl && (
                  <div className="mt-6 border-t pt-4">
                    <h3 className="font-medium mb-3 flex items-center text-gray-700">
                      <FaVideo className="mr-2 text-[#0062ff]" /> Product Video
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <iframe
                        src={product.videoUrl}
                        title={`${product.title} video demo`}
                        className="w-full aspect-video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="lg:w-3/5">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                
                {/* Model Number and Availability */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-3">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Model:</span> {product.modelNumber || `I&I-${product.id}${product.title.slice(0, 3).toUpperCase()}`}
                  </div>
                  <div className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    <span className="font-medium">Availability:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
                
                {/* Reviews Preview */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                      key={star}
                      size={16}
                      className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.0/5) · {product.reviews || 42} Reviews</span>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className="text-lg text-gray-500 line-through ml-3">{product.oldPrice}</span>
                      {product.oldPrice && product.price && (
                        <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm font-medium">
                          Save {Math.round(((parseFloat(product.oldPrice.replace(/[^\d.]/g, '')) - parseFloat(product.price.replace(/[^\d.]/g, ''))) / parseFloat(product.oldPrice.replace(/[^\d.]/g, ''))) * 100)}%
                        </span>
                      )}
                    </>
                  )}
                </div>
                
                {/* Enhanced Product Description - EXPANDED SECTION */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">Product Description</h2>
                  <div className="text-gray-600">
                    <p className="mb-4">{product.whyLoveIt}</p>
                    
                    {/* Detailed description paragraphs - dynamically generated based on product type */}
                    {product.title.toLowerCase().includes('camera') && (
                      <div className="space-y-3 mb-4">
                        <p>
                          Capture life's most important moments in stunning 4K UHD quality with the {product.title}. 
                          This professional-grade camera features a 180° rotatable lens and infrared night-vision up to 10 meters, 
                          ensuring you never miss a moment, day or night.
                        </p>
                        <p>
                          Built with safety in mind, the integrated one-click SOS calling feature and 4G LTE connectivity 
                          provide peace of mind during your adventures. The device automatically backs up your footage 
                          to secure cloud storage, protecting your valuable memories.
                        </p>
                      </div>
                    )}
                    
                    {product.title.toLowerCase().includes('projector') && (
                      <div className="space-y-3 mb-4">
                        <p>
                          Transform any space into your personal cinema with the {product.title}. This ultra-portable projector 
                          delivers HD 720P resolution with auto-keystone correction for a perfect picture on any surface.
                        </p>
                        <p>
                          Featuring advanced Wi-Fi 6 and Bluetooth 5.0 connectivity, along with built-in Android 13.0, 
                          this smart projector comes pre-installed with popular streaming apps like Netflix, YouTube, and Prime Video. 
                          The compact design fits in your palm while providing an impressive big-screen experience.
                        </p>
                      </div>
                    )}
                    
                    {/* Key Feature Highlights */}
                    <div className="mt-4 bg-blue-50 rounded-md border border-blue-200 overflow-hidden">
                      <div className="bg-blue-100 py-2 px-4">
                        <h3 className="font-medium text-blue-800">Key Highlights</h3>
                      </div>
                      <div className="p-4">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.slice(0, 6).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
                      <p className="text-xs text-gray-500">On orders over ₹3000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Shield size={20} className="text-[#0062ff]" />
                    <div>
                      <p className="font-medium text-sm">Secure Checkout</p>
                      <p className="text-xs text-gray-500">100% Protected Payment</p>
                    </div>
                  </div>
                </div>
                
                {/* Emergency SOS Feature Highlight */}
                {product.title.toLowerCase().includes('vlog camera') && (
                  <div className="flex items-center gap-3 bg-red-50 p-3 rounded-md mb-6">
                    <AlertTriangle size={20} className="text-red-500" />
                    <div>
                      <p className="font-medium text-sm text-red-600">Emergency SOS Feature</p>
                      <p className="text-xs text-red-500">Stay safe with built-in emergency SOS functionality.</p>
                    </div>
                  </div>
                )}
                
                {/* Share */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Share:</span>
                    <a href="https://www.facebook.com/people/Iandicompany-Ele/pfbid06gGxGPRZef5P714qioE5TPMWWxuCa9W9ehMsUXcUsmMLZdKAKhA8MXSvKF22nJvDl/">
                      <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#0062ff] hover:text-white flex items-center justify-center transition-colors">
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
        
        {/* Detailed Specifications Section - COMPREHENSIVE SECTION */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Detailed Specifications</h2>
              
              <div className="space-y-6">
                {specifications.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      className="w-full bg-gray-50 px-4 py-3 flex justify-between items-center"
                      onClick={() => toggleSpecSection(section.title)}
                    >
                      <h3 className="font-semibold text-gray-800">{section.title}</h3>
                      {expandedSpecs[section.title] ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    
                    {(expandedSpecs[section.title] || sectionIndex === 0) && (
                      <div className="p-4">
                        <table className="w-full">
                          <tbody>
                            {section.items.map((item, itemIndex) => (
                              <tr key={itemIndex} className={itemIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="py-2 px-3 border-b border-gray-200 font-medium text-sm text-gray-900 w-1/3">{item.name}</td>
                                <td className="py-2 px-3 border-b border-gray-200 text-sm text-gray-700">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
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

        {/* Video Demonstration Section */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {product.videoId && (
              <div className="border-t border-gray-200 p-6">
                <h2 className="text-2xl font-bold mb-6">See It In Action</h2>
                <div className="aspect-video max-w-3xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${product.videoId}`}
                    title={`${product.title} - Video Demonstration`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            )}
            
            {/* Additional Product Videos Section */}
            {/* {product.additionalVideos && product.additionalVideos.length > 0 && (
              <div className="border-t border-gray-200 p-6">
                <h2 className="text-2xl font-bold mb-6">More Videos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.additionalVideos.map(video => (
                    <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
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
                        <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
            
            {/* Comparison Table */}
            {product.title.toLowerCase().includes('camera') && (
              <div className="border-t border-gray-200 p-6">
                <h2 className="text-2xl font-bold mb-6">Model Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Edition</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Video Resolution</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4K @ 30fps</td>

                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Battery Life</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 hours</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storage</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to 256GB</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Night Vision</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to 10m</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,990</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 mt-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {product.title.toLowerCase().includes('camera') && (
                <>
                  {/* <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq1')}
                    >
                      <span className="font-medium">How long does the battery last?</span>
                      {expandedSpecs['faq1'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq1'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">The I & I Vlog Camera has a built-in 5000mAh Li-ion battery that provides up to 8 hours of continuous recording at 1080p resolution. Battery life may vary depending on usage conditions and selected video quality.</p>
                      </div>
                    )}
                  </div> */}
                  
                  <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq2')}
                    >
                      <span className="font-medium">What is the maximum storage capacity?</span>
                      {expandedSpecs['faq2'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq2'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">The camera supports microSD cards up to 256GB. Additionally, it features AES-256 encrypted cloud backup for added security and storage options.</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq3')}
                    >
                      <span className="font-medium">How does the SOS feature work?</span>
                      {expandedSpecs['faq3'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq3'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">The one-click SOS calling feature allows you to quickly send an emergency alert with your location to pre-configured contacts. This requires 4G LTE connectivity and initial setup through the companion app.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {product.title.toLowerCase().includes('projector') && (
                <>
                  <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq1')}
                    >
                      <span className="font-medium">What is the recommended projection distance?</span>
                      {expandedSpecs['faq1'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq1'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">The optimal projection distance is between 1-3 meters from the surface, which will provide a screen size ranging from 30 to 100 inches. For best image quality, we recommend projecting onto a white or light-colored wall in a dimly lit room.</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq2')}
                    >
                      <span className="font-medium">Can I connect external speakers?</span>
                      {expandedSpecs['faq2'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq2'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">Yes, the projector features an audio-out port for connecting external speakers. You can also connect Bluetooth speakers wirelessly via Bluetooth 5.0 for enhanced audio experience.</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-md">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleSpecSection('faq3')}
                    >
                      <span className="font-medium">How do I install apps not available in the pre-installed list?</span>
                      {expandedSpecs['faq3'] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {expandedSpecs['faq3'] && (
                      <div className="p-4 pt-0 bg-gray-50">
                        <p className="text-gray-700">Since the projector runs on Android 13.0, you can download and install applications through the Google Play Store. Simply connect to Wi-Fi, open the Play Store app, and search for your desired applications.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;