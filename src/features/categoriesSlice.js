import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const getCategories = () => async (dispatch) => {
  try {
    let apiUrl = `${import.meta.env.VITE_BASE_URL}categories`;

    const response = await axios.get(apiUrl);
    dispatch(setCategories(response.data));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("No restaurants found for this category.");
    } else {
      console.log("An error occurred:", error.message);
    }
  }
};
