// restaurantUtils.js

// restaurantUtils.js

export const sortRestaurants = (
  listRestaurants,
  priceSorting,
  openNowFilter,
  displayedRestaurants
) => {
  if (!listRestaurants) {
    return [];
  }

  const sorted = [...listRestaurants];
  if (priceSorting === "highestToLowest") {
    sorted.sort((a, b) => b.price_range.localeCompare(a.price_range));
  } else if (priceSorting === "lowestToHighest") {
    sorted.sort((a, b) => a.price_range.localeCompare(b.price_range));
  }

  const filtered = sorted.filter((resto) => {
    return openNowFilter ? isRestaurantOpenNow(resto.operational_hours) : true;
  });

  return filtered.slice(0, displayedRestaurants);
};
