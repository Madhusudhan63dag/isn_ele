import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Youtube, Phone, MapPin, Clock, ChevronRight, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import one from '../utils/image/payment_icon/one.png'
import two from '../utils/image/payment_icon/two.png'
import three from '../utils/image/payment_icon/three.png'
import four from '../utils/image/payment_icon/four.png'
import logo from '../utils/image/navbar_logo.png'
import navbar from '../utils/data/navbar'; // Import the centralized navigation data

const Footer = () => {
  const [showCopyPopup, setShowCopyPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('israelitesshopping171@gmail.com');
    setShowCopyPopup(true);
    
    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowCopyPopup(false);
    }, 2000);
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
    <footer className="bg-[#121212] text-white">
      
      {/* Main Footer Content */}
      <div className="bg-[#1a1a1a] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Information */}
            <div>
              <div className="mb-6">
                <Link to="/">
                  <img src={logo} alt="Tech Store" className="h-12 mb-4" />
                </Link>
                <p className="text-gray-400 text-sm">
                  Your one-stop destination for quality products. We offer the latest gadgets and electronics with exceptional service.
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3 text-white">Contact Us</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center relative" ref={phoneRef}>
                    <Phone size={16} className="mr-2 text-gray-500" />
                    <span 
                      onClick={handleCopyPhone}
                      className="cursor-pointer hover:text-text-orange-500 transition-colors"
                      title="Click to copy phone number"
                    >+91 (903) 094-5444</span>
                    {showPhonePopup && (
                      <div className="absolute -top-8 left-28 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Phone number copied!
                      </div>
                    )}
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2 text-gray-500" />
                    <span>israelitesshopping171@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={16} className="mr-2 text-gray-500 mt-1" />
                    <span>Begumpet, Hyderabad, Telangana 500016</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Shop Links - Updated to use navbar data */}
            <div>
              <h4 className="text-base font-medium mb-4 pb-2 border-b border-[#333] text-white">Shop By Category</h4>
              <ul className="space-y-2">
                {navbar[0].subItems.map(item => (
                  <li key={item.id}>
                    <Link to={item.link} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1" /> 
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                {navbar[1].subItems.map(item => (
                  <li key={`deal-${item.id}`}>
                    <Link to={item.link} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1" /> 
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-base font-medium mb-4 pb-2 border-b border-[#333] text-white">Customer Service</h4>
              <ul className="space-y-2">
                {/* {navbar[2].subItems.map(item => (
                  <li key={`support-${item.id}`}>
                    <Link to={item.link} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1" /> 
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))} */}
                <li>
                  <Link to="/shipping" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" /> 
                    <span>Shipping Information</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" /> 
                    <span>Return Policy</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* About, Social & Payments */}
            <div>
              <h4 className="text-base font-medium mb-4 pb-2 border-b border-[#333] text-white">About & Connect</h4>
              <ul className="space-y-2 mb-6">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" /> 
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" /> 
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" /> 
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>

              <div className="mb-6">
                <h4 className="text-base font-medium mb-3 text-white">Connect With Us</h4>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/profile.php?id=61575830090610" className="w-8 h-8 rounded-full bg-[#262626] hover:bg-orange-500 flex items-center justify-center transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://www.instagram.com/myiandiofficial/" className="w-8 h-8 rounded-full bg-[#262626] hover:bg-orange-500 flex items-center justify-center transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.youtube.com/@myiandiofficial" className="w-8 h-8 rounded-full bg-[#262626] hover:bg-orange-500 flex items-center justify-center transition-colors">
                    <Youtube size={16} />
                  </a>
                  <div className="relative" ref={emailRef}>
                    <button 
                      onClick={handleCopyEmail}
                      className="w-8 h-8 rounded-full bg-[#262626] hover:bg-orange-500 flex items-center justify-center transition-colors"
                      title="Click to copy email"
                    >
                      <Mail size={16} />
                    </button>
                    {showCopyPopup && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Email copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-medium mb-3 text-white">We Accept</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-[#262626] p-1.5 rounded-md h-8 flex items-center justify-center">
                    <img 
                      src={one}
                      alt="Visa" 
                      className="h-4 object-contain"
                    />
                  </div>
                  <div className="bg-[#262626] p-1.5 rounded-md h-8 flex items-center justify-center">
                    <img 
                      src={two} 
                      alt="Mastercard" 
                      className="h-4 object-contain"
                    />
                  </div>
                  <div className="bg-[#262626] p-1.5 rounded-md h-8 flex items-center justify-center">
                    <img 
                      src={three} 
                      alt="American Express" 
                      className="h-4 object-contain"
                    />
                  </div>
                  <div className="bg-[#262626] p-1.5 rounded-md h-8 flex items-center justify-center">
                    <img 
                      src={four} 
                      alt="PayPal" 
                      className="h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Bar */}
          <div className="border-t border-b border-[#333] py-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Truck className="mb-2 text-orange-500" size={24} />
                <h5 className="text-sm font-medium">FREE SHIPPING</h5>
                <p className="text-xs text-gray-400">On orders over ₹3,000</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="mb-2 text-orange-500" size={24} />
                <h5 className="text-sm font-medium">SECURE PAYMENTS</h5>
                <p className="text-xs text-gray-400">100% secure payment</p>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="mb-2 text-orange-500" size={24} />
                <h5 className="text-sm font-medium">PRICE MATCH</h5>
                <p className="text-xs text-gray-400">Get the best price</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="mb-2 text-orange-500" size={24} />
                <h5 className="text-sm font-medium">SUPPORT 24/7</h5>
                <p className="text-xs text-gray-400">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
              

      {/* Copyright */}
      <div className="bg-[#121212] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 mb-2 md:mb-0">
            © {new Date().getFullYear()} Tech Store. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/shippings" className="text-xs text-gray-500 hover:text-white transition-colors">
              Shipping Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="text-xs text-gray-500 hover:text-white transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

