import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className='flex'>
      {/* Render Full Stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} color="gold" />
      ))}
      
      {/* Render Half Star */}
      {halfStar === 1 && <FaStarHalfAlt color="gold" />}
      
      {/* Render Empty Stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} color="gold" />
      ))}
      
      
    </div>
  );
};

export default StarRating;