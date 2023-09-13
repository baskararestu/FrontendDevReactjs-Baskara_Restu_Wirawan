import React, { useEffect, useState } from "react";
import { getRestaurants } from "../features/retaurantsSlice";
import { useDispatch, useSelector } from "react-redux";

import LoadMoreButton from "./LoadMoreButton";
import RestaurantCard from "./RestaurantCard";
import { sortRestaurants } from "../utils/restaurantUtil";

function ListRestaurants({ category, priceSorting, openNowFilter }) {
  const dispatch = useDispatch();
  const imagePath = `${import.meta.env.VITE_IMG_URL}`;
  const listRestaurants = useSelector(
    (state) => state.restaurants.restaurantsList.resultData
  );
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const currentDay = "Monday"; // Example day
  const currentTime = "10:30"; // Example time
  const [displayedRestaurants, setDisplayedRestaurants] = useState(8); // Number of restaurants to display initially
  const restaurantsToLoad = 8;

  const isRestaurantOpenNow = (operationalHours) => {
    if (!operationalHours) {
      return false;
    }

    const dayHours = operationalHours[currentDay];
    if (!dayHours) {
      return false;
    }

    const { open, close } = dayHours;
    return currentTime >= open && currentTime <= close;
  };

  useEffect(() => {
    dispatch(getRestaurants(category));
  }, [dispatch, category]);

  useEffect(() => {
    // When openNowFilter changes from true to false, reset displayedRestaurants to 8
    if (!openNowFilter) {
      setDisplayedRestaurants(8);
    }
  }, [openNowFilter]);

  useEffect(() => {
    const sortedAndFiltered = sortRestaurants(
      listRestaurants,
      priceSorting,
      openNowFilter,
      displayedRestaurants
    );
    setFilteredRestaurants(sortedAndFiltered); // Update state here
  }, [
    listRestaurants,
    priceSorting,
    currentDay,
    currentTime,
    openNowFilter,
    displayedRestaurants,
  ]);

  const loadMoreRestaurants = () => {
    setDisplayedRestaurants(displayedRestaurants + restaurantsToLoad);
  };

  if (!listRestaurants) {
    return <div>Loading...</div>;
  }

  if (filteredRestaurants.length === 0) {
    return (
      <div className="text-center text-lg md:text-2xl">
        No matching restaurants found.
      </div>
    );
  }
  return (
    <div className="grid grid-rows-1">
      <h3 className="lg:text-2xl">All Restaurants</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {filteredRestaurants.map((resto) => (
          <RestaurantCard
            resto={resto}
            key={resto.id_restaurant}
            isOpenNow={isRestaurantOpenNow(resto.operational_hours)}
          />
        ))}
      </div>
      {displayedRestaurants < listRestaurants.length && (
        <LoadMoreButton
          displayedRestaurants={displayedRestaurants}
          listRestaurants={listRestaurants}
          loadMoreRestaurants={loadMoreRestaurants}
        />
      )}
    </div>
  );
}

export default ListRestaurants;
