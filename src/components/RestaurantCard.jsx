// RestaurantCard.js
import React from "react";
import getPriceSymbol from "../features/getPriceSymbol";
import StarRating from "./StarRating";
import BadgeOpen from "./BadgeOpen";
import BadgeClosed from "./BadgeClosed";
import LearnMoreButton from "./LearnMoreButton";

function RestaurantCard({ resto, isOpenNow }) {
  const imagePath = `${import.meta.env.VITE_IMG_URL}`;

  return (
    <div className="card card-compact w-full sm:w-[15rem] md:w-[20rem] lg:w-[18rem] xl:w-[20rem] bg-base-100 shadow-lg rounded-sm mb-10">
      <div className="card-body">
        <figure>
          <img
            src={`${imagePath}/${resto.image_path}`}
            alt="Restaurants"
            className="w-auto h-[12rem]"
          />
        </figure>
        <h2 className="card-title">{resto.name}</h2>
        <StarRating rating={resto.rating} />
        <div className="flex justify-between pb-16">
          <div className="text-lg pt-2">
            {resto.category_name}-{getPriceSymbol(resto.price_range)}
          </div>
          {isOpenNow ? <BadgeOpen /> : <BadgeClosed />}
        </div>
        <LearnMoreButton restaurantName={resto.name} restaurantData={resto} />
      </div>
    </div>
  );
}

export default RestaurantCard;
