import React, { useEffect, useState } from "react";
import { getRestaurants } from "../features/retaurantsSlice";
import { useDispatch, useSelector } from "react-redux";
import getPriceSymbol from "../features/getPriceSymbol";

function ListRestaurants({ category, priceSorting, openNowFilter }) {
  const dispatch = useDispatch();
  const imagePath = `${import.meta.env.VITE_IMG_URL}`;
  const listRestaurants = useSelector(
    (state) => state.restaurants.restaurantsList.resultData
  );
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const currentDay = "Monday"; // Example day
  const currentTime = "10:30"; // Example time

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
    sortRestaurants();
  }, [listRestaurants, priceSorting, currentDay, currentTime, openNowFilter]);

  const sortRestaurants = () => {
    if (!listRestaurants) {
      return;
    }

    const sorted = [...listRestaurants];
    if (priceSorting === "highestToLowest") {
      sorted.sort((a, b) => b.price_range.localeCompare(a.price_range));
    } else if (priceSorting === "lowestToHighest") {
      sorted.sort((a, b) => a.price_range.localeCompare(b.price_range));
    }

    const filtered = sorted.filter((resto) => {
      return openNowFilter
        ? isRestaurantOpenNow(resto.operational_hours)
        : true;
    });

    setFilteredRestaurants(filtered);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredRestaurants.map((resto) => (
          <div
            key={resto.id_restaurant}
            className="card card-compact w-[13rem] md:w-[20rem] bg-base-100 shadow-md rounded-sm pt-5"
          >
            <figure>
              <img
                src={`${imagePath}/${resto.image_path}`}
                alt="Restaurants"
                className="w-full h-[12rem]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{resto.name}</h2>
              <div>{resto.rating}</div>
              <div>
                {resto.category_name}-{getPriceSymbol(resto.price_range)}
              </div>

              {isRestaurantOpenNow(resto.operational_hours) ? (
                <div className="flex flex-row gap-2 self-end">
                  <div className="badge badge-info"></div>
                  <p className="text-md">OPEN</p>
                </div>
              ) : (
                <div className="flex flex-row gap-2 self-end">
                  <div className="badge badge-error"></div>
                  <p>CLOSED</p>
                </div>
              )}
              <br />
              <div className="card-actions justify-center">
                <button className="uppercase btn bg-blue-950 w-full rounded-sm bottom-0 absolute text-white/80 hover:bg-blue-950/80 hover:text-white/90">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRestaurants;
