import React from "react";
import { Link } from "react-router-dom";

function LearnMoreButton({ restaurantName, restaurantData }) {
  const handleLearnMoreClick = () => {
    localStorage.setItem(
      `restaurantData_${restaurantName}`,
      JSON.stringify(restaurantData)
    );
  };

  return (
    <div className="card-actions justify-center">
      <Link
        to={`/${encodeURIComponent(restaurantName)}`}
        className="uppercase btn bg-blue-950 w-full rounded-sm bottom-0 absolute text-white/80 hover:bg-blue-950/80 hover:text-white/90"
        onClick={handleLearnMoreClick}
      >
        Learn More
      </Link>
    </div>
  );
}

export default LearnMoreButton;
