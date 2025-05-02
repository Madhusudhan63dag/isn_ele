import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../components/SEO';

const Sitemap = () => {
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Define sitemap structure
  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Shop Categories',
      links: [
        { name: 'Cameras & Recorders', path: '/trending?category=cameras' },
        { name: 'Projectors & Displays', path: '/trending?category=projectors' }
      ]
    },
    {
      title: 'Product Deals',
      links: [
        { name: 'Vlog Camera Launch Offer', path: '/deals/vlog-camera-deal' },
        { name: 'Mini Projector Special', path: '/deals/projector-special' },
        { name: 'Content Creator Bundle', path: '/deals/creator-bundle' }
      ]
    },
    {
      title: 'Customer Support',
      links: [
        { name: 'Product Support', path: '/help/product-support' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping Information', path: '/shippings' }
      ]
    },
    {
      title: 'Legal & Policies',
      links: [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' }
      ]
    },
    {
      title: 'Shopping',
      links: [
        { name: 'My Cart', path: '/cart' },
        { name: 'Checkout', path: '/checkout' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO 
        title="Site Map - I & I Tech Store"
        description="Explore our website structure. Find all pages including product categories, policies, and customer support resources."
        noindex={true}
      />
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center">Site Map</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapData.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Cameras & Recorders</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/product/1" 
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      I & I Vlog Camera Standard Edition
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Projectors & Displays</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/product/2" 
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      I & I Portable Mini Projector Standard Edition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;