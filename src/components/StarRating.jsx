import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating }) {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }

  return (
    <div className="flex items-center">
      {stars.map((star, index) => (
        <span key={index} className="text-yellow-400">
          {star}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
