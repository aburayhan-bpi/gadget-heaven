import React from "react";
import ReactStars from "react-rating-stars-component";
const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 !== 0; // True if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

return (
  <div className="flex gap-4 text-lg items-center">

    <ReactStars
      count={5}
      value={rating}
      size={24}
      activeColor="#FFA500" 
      isHalf={true}
      edit={false}
    />

    {/* Display Rating Value */}
    <p className="bg-gray-100 px-3 rounded-full text-black">{rating}</p>
  </div>
);
};

export default Rating;
