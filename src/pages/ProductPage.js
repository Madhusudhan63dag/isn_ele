import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaHeart, FaFacebookF, FaTwitter, FaPinterestP, FaGoogle } from 'react-icons/fa';
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

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-[#0062ff] border-r-[#0062ff] border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

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
              <a href="/products" className="hover:text-[#0062ff]">Products</a>
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
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={16}
                        className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">4.0 (24 reviews)</span>
                  <button 
                    className="text-sm text-[#0062ff] ml-4 hover:underline"
                    onClick={() => {
                      setActiveTab('reviews');
                      setShowReviews(true);
                      setTimeout(() => {
                        document.getElementById('product-reviews').scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    Write a review
                  </button>
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
                    
                    <button 
                      className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      title="Add to Wishlist"
                    >
                      <FaHeart className="text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                </div>
                
                {/* Shipping and Security */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Truck size={20} className="text-[#0062ff]" />
                    <div>
                      <p className="font-medium text-sm">Free Shipping</p>
                      <p className="text-xs text-gray-500">On orders over $50</p>
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
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#0062ff] hover:text-white flex items-center justify-center transition-colors">
                      <FaFacebookF />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-colors">
                      <FaTwitter />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#E60023] hover:text-white flex items-center justify-center transition-colors">
                      <FaPinterestP />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#f0f2f5] hover:bg-[#DB4437] hover:text-white flex items-center justify-center transition-colors">
                      <FaGoogle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs Section */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200">
              <button 
                className={`py-4 px-6 text-sm font-medium ${activeTab === 'description' ? 'text-[#0062ff] border-b-2 border-[#0062ff]' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`py-4 px-6 text-sm font-medium ${activeTab === 'specs' ? 'text-[#0062ff] border-b-2 border-[#0062ff]' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button 
                className={`py-4 px-6 text-sm font-medium ${activeTab === 'reviews' ? 'text-[#0062ff] border-b-2 border-[#0062ff]' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('reviews')}
                id="product-reviews"
              >
                Reviews (24)
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">WHY YOU'LL LOVE IT</h3>
                    <div className="text-gray-700 space-y-4">
                      <p>{product.whyLoveIt}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">FEATURES</h3>
                    <div className="text-gray-700 space-y-4">
                      <p>{product.ingredients}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Specifications Tab */}
              {activeTab === 'specs' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">TECHNICAL SPECIFICATIONS</h3>
                    <div className="border-t border-gray-200">
                      <div className="grid grid-cols-2 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-600">Model</div>
                        <div className="text-gray-800">Tech Pro X7</div>
                      </div>
                      <div className="grid grid-cols-2 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-600">Release Year</div>
                        <div className="text-gray-800">2025</div>
                      </div>
                      <div className="grid grid-cols-2 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-600">Warranty</div>
                        <div className="text-gray-800">1 Year</div>
                      </div>
                      <div className="grid grid-cols-2 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-600">Dimensions</div>
                        <div className="text-gray-800">15.2 x 7.3 x 0.7 cm</div>
                      </div>
                      <div className="grid grid-cols-2 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-600">Weight</div>
                        <div className="text-gray-800">180g</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">BOX CONTENTS</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Main Device</li>
                      <li>Power Adapter</li>
                      <li>Quick Start Guide</li>
                      <li>USB-C Cable</li>
                      <li>SIM Ejector Tool</li>
                      <li>Warranty Card</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="md:w-1/3 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold text-gray-800">4.0</div>
                      <div className="flex my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            size={20}
                            className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">Based on 24 reviews</div>
                    </div>
                    
                    <div className="md:w-2/3 space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm w-8">5★</span>
                        <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <span className="text-sm w-8 text-gray-500">65%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-8">4★</span>
                        <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm w-8 text-gray-500">20%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-8">3★</span>
                        <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm w-8 text-gray-500">10%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-8">2★</span>
                        <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{width: '3%'}}></div>
                        </div>
                        <span className="text-sm w-8 text-gray-500">3%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm w-8">1★</span>
                        <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{width: '2%'}}></div>
                        </div>
                        <span className="text-sm w-8 text-gray-500">2%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <button 
                      className="bg-[#0062ff] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0048cc] transition-colors mb-8"
                      onClick={() => setShowReviews(!showReviews)}
                    >
                      Write a Review
                    </button>
                    
                    {showReviews && (
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-medium mb-4">Write Your Review</h3>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={24}
                                className="cursor-pointer text-gray-300 hover:text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Review Title</label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent"
                            placeholder="Give your review a title"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                          <textarea 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent"
                            rows="4"
                            placeholder="Write your thoughts about this product"
                          ></textarea>
                        </div>
                        <button className="bg-[#0062ff] text-white py-2 px-4 rounded-md font-medium hover:bg-[#0048cc] transition-colors">
                          Submit Review
                        </button>
                      </div>
                    )}
                    
                    {/* Sample Reviews */}
                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={16}
                                className={star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium">Excellent device!</span>
                        </div>
                        <p className="text-gray-600 mb-2">This product exceeded my expectations. The build quality is premium and it performs amazingly well for the price.</p>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">John D.</span> - April 15, 2025
                        </div>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={16}
                                className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium">Great value for money</span>
                        </div>
                        <p className="text-gray-600 mb-2">I've been using this for about a month now and I'm very impressed with the quality. Would recommend to anyone looking for a reliable product.</p>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">Sarah M.</span> - April 3, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
          
        {/* Related Products */}
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="h-48 flex items-center justify-center mb-4">
                    <img 
                      src={product.images[0]} 
                      alt={`Related product ${item}`}
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <h3 className="font-medium mb-2 text-gray-800">Related Product {item}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={12}
                          className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(18)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">${(Math.random() * 100 + 99).toFixed(2)}</span>
                    <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#0062ff] hover:text-white flex items-center justify-center transition-colors">
                      <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        {product.values && product.values.length > 0 && (
          <div className="container mx-auto px-4 mt-12">
            <div className="bg-white py-8 rounded-lg shadow-sm">
              <h3 className="text-center font-bold text-xl mb-8">Product Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto text-center gap-6">
                {product.values.map((value, index) => (
                  <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[#f0f7ff] flex items-center justify-center mb-3">
                      <img src={value.img} alt={value.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="font-medium text-gray-800">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
