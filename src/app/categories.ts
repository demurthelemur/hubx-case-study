import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import categoriesType from "../types/categoriesType";
``;
interface categoriesState {
  categories: categoriesType[];
}

const initialState: categoriesState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<categoriesType>) => {
      state.categories.push(action.payload);
      console.log(state.categories);
    },
  },
});

export const { addQuestion } = categorySlice.actions;
export default categorySlice.reducer;
