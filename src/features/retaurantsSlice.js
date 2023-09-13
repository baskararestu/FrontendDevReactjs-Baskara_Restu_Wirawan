import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantsList: [],
  },
  reducers: {
    setRestaurantsList: (state, action) => {
      state.restaurantsList = action.payload;
    },
  },
});
export const { setRestaurantsList } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;

export const getRestaurants = (category) => async (dispatch) => {
  try {
    let apiUrl = `${import.meta.env.VITE_BASE_URL}restaurants`;
    if (category) {
      apiUrl += `?category=${category}`;
    }

    const response = await axios.get(apiUrl);
    dispatch(setRestaurantsList(response.data));
    console.log(category, "category");
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("No restaurants found for this category.");
    } else {
      console.log("An error occurred:", error.message);
    }
  }
};
