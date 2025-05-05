import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext';
import news from '../utils/image/new.webp';

const Card2 = ({ card }) => {
  const { addToCart } = useCart();
  const [fontSize, setFontSize] = useState('');
  console.log(card, 'card2');
  // Calculate font size based on text length
  useEffect(() => {
    if (card && card.name) {
      const nameLength = card.name.length;
      if (nameLength > 30) {
        setFontSize('text-[10px] sm:text-xs');
      } else if (nameLength > 20) {
        setFontSize('text-xs sm:text-sm');
      } else {
        setFontSize('text-sm sm:text-base');
      }
    }
  }, [card]);
  
  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart({
      id: card.id,
      title: card.name,
      price: card.price,
      imageUrl: card.image
    });
  };

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = card.originalPrice ? 
    Math.round(((card.originalPrice - card.price) / card.originalPrice) * 100) : 0;

  return (
    <div>
        <div className='bg-white rounded-lg shadow-sm'>
            <div>
                <div className="relative">
                    <img 
                      src={card.image} 
                      alt={card.name} 
                      className='w-full object-cover rounded-md' 
                    />
                    {card.originalPrice && (
                      <div className='absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md'>
                        {discountPercentage}% OFF
                      </div>
                    )}
                    {/* <div className='absolute top-0 right-4'>
                      <div className="relative">
                        <img src={news} alt="Product" className='w-10 sm:w-12 md:w-auto' />
                        <p className='absolute top-1 sm:top-2 left-3 sm:left-10 text-xs sm:text-sm md:text-base font-bold text-white'>New</p>
                      </div>
                    </div> */}
                </div>
                <div className='text-center mt-2 sm:mt-3 md:mt-4'>
                    <div className="relative group h-[1.5em]">
                      <p className={`${fontSize} font-medium truncate`} title={card.name}>
                        {card.name}
                      </p>
                      
                      {/* Show full name tooltip on hover */}
                      {card.name && card.name.length > 20 && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none 
                                      whitespace-nowrap z-10 max-w-[200px] overflow-hidden text-ellipsis hidden sm:block">
                          {card.name}
                        </div>
                      )}
                    </div>
                    <div className='mt-1 sm:mt-2 flex justify-center items-center gap-1.5'>
                      <p className='text-xs sm:text-sm font-medium text-green-600'>₹{card.price}</p>
                      {card.originalPrice && (
                        <>
                          <p className='text-[10px] sm:text-xs text-gray-500 line-through'>₹{card.originalPrice}</p>
                          <p className='text-[10px] bg-green-100 text-green-800 px-1 py-0.5 rounded'>Save {discountPercentage}%</p>
                        </>
                      )}
                    </div>
                    <button 
                      onClick={handleAddToCart}
                      className="w-full mt-2 sm:mt-3 bg-blue-600 hover:bg-blue-700 text-white py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card2