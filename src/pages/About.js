import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaMicrochip, FaHeart, FaShieldAlt, FaCheck, FaMedal, FaCertificate } from 'react-icons/fa';
import bannerData from '../utils/data/banner';
import productData from '../utils/data/product';
import SEO from '../components/SEO';

const About = () => {
  const location = useLocation();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [prevBanner, setPrevBanner] = useState(0);
  
  // Get banners from banner data
  const banners = bannerData.aboutBanners;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
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

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About I & I Tech - Our Mission & Vision | Innovative Electronics"
        description="Learn about I & I Tech's mission to provide cutting-edge electronic devices. Discover our story, values, and commitment to quality products."
        canonical="https://myiandi.com/about"
      />
      
      {/* Hero Section with Banner */}
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
                className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              >
              </div>
            </div>
          ))}
        </div>
        
        {banners.length > 1 && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentBanner === index ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => goToBanner(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At I & I Tech, we're on a mission to bring cutting-edge electronic devices that enhance your everyday experience.
                We believe that technology should be accessible, reliable, and designed with user needs in mind.
              </p>
              <p className="text-gray-700">
                Every product we offer is carefully engineered to provide exceptional functionality and performance,
                maintaining our commitment to innovation, quality, and customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                We envision a world where technology enhances human creativity and connectivity, providing tools that
                empower users to capture, share, and experience their world in new ways.
              </p>
              <p className="text-gray-700">
                By 2026, we aim to become a leading provider of innovative electronic devices, recognized for our
                technological excellence, reliability, and forward-thinking approach to product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMicrochip className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3">Technological Excellence</h3>
              <p className="text-gray-700">
                We source premium components and employ rigorous quality control to ensure our products deliver exceptional
                performance, reliability, and durability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3">User-Centered Design</h3>
              <p className="text-gray-700">
                Your experience is our priority. We create products with intuitive interfaces and thoughtful features that make
                technology accessible and enjoyable for everyone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3">Innovation Focus</h3>
              <p className="text-gray-700">
                We continuously explore new technologies and creative solutions to deliver products that address real-world needs
                and enhance your digital lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              I & I Tech was founded in 2020 by a team of engineers and designers with a shared passion for creating
              technology that makes a difference in people's lives.
            </p>
            
            <p className="text-gray-700 mb-6">
              What began as a small initiative to create better recording solutions has grown into a comprehensive
              line of electronic products that combine performance with practicality. From our flagship I & I Vlog Camera
              to our innovative I & I Portable Mini Projector, every product reflects our commitment to quality and innovation.
            </p>
            
            <p className="text-gray-700">
              Today, we continue to push the boundaries of what's possible, bringing you reliable, feature-rich electronic
              devices that help you capture, create, and share your world.
            </p>
          </div>
        </div>
      </section> */}

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-xl mb-4 text-blue-800">Cameras & Recording</h3>
              <p className="text-gray-700 mb-6">
                Professional-grade cameras with advanced features designed for content creators, vloggers, and individuals
                who demand exceptional video quality with innovative safety features.
              </p>
              <div className="text-blue-700 font-bold">Featured Product:</div>
              <div className="text-gray-800">I & I Vlog Camera Standard Edition</div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <h3 className="font-bold text-xl mb-4 text-purple-800">Projectors & Displays</h3>
              <p className="text-gray-700 mb-6">
                Ultra-portable projectors with cutting-edge connectivity and smart features that transform any space
                into your personal entertainment center.
              </p>
              <div className="text-purple-700 font-bold">Featured Product:</div>
              <div className="text-gray-800">I & I Portable Mini Projector Standard Edition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Quality</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Rigorous Testing</h3>
              <p className="text-gray-700">
                All our products undergo comprehensive quality control and performance testing before reaching our customers.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaMedal className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Premium Components</h3>
              <p className="text-gray-700">
                We use only high-quality parts and materials to ensure durability, reliability, and superior performance.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaCertificate className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Industry Certified</h3>
              <p className="text-gray-700">
                Our products comply with international standards for safety, EMC, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about our technology? 
            Our team is here to help you find the right solutions for your needs.
          </p>
          <a href='/contact'>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md">
            Contact Us
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
