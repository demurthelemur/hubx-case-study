import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryData } from "../types/categoriesType";

interface categoriesState {
  categories: Category[];
  categoriesLoading: boolean; // Add loading property to the state
}

const initialState: categoriesState = {
  categories: [],
  categoriesLoading: false, // Set initial loading state to false
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await fetch(
      "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories",
      { method: "GET" }
    );
    const data: CategoryData = await response.json(); // Update the type of 'data' to CategoryData
    return data.data as Category[]; // Access the 'data' property
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.categoriesLoading = true; // Set loading to true when fetchCategory is pending
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false; // Set loading to false when fetchCategory is fulfilled
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.categoriesLoading = false; // Set loading to false when fetchCategory is rejected
      });
  },
});

export const { addQuestion } = categorySlice.actions;
export default categorySlice.reducer;
