import React from 'react';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className='flex'>
      {/* Render Full Stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <IoStar key={index} color="orange" />
      ))}
      
      {/* Render Half Star */}
      {halfStar === 1 && <IoStarHalf color="orange" /> }
      
      {/* Render Empty Stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <IoStarOutline key={index} color="orange" />
    
      ))}
      
    </div>
  );
};

export default StarRating;