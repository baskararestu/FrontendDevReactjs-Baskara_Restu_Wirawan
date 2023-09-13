import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../features/retaurantsSlice";
import categoriesReducer from "../features/categoriesSlice";

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
  },
});
