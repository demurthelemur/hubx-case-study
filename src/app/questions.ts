import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import questionType from "../types/questionType";

interface questionState {
  questions: questionType[];
  questionsLoading: boolean; // Add loading property to the state
}

const initialState: questionState = {
  questions: [],
  questionsLoading: false, // Set initial loading state to false
};

export const fetchQuestion = createAsyncThunk(
  "question/fetchQuestion",
  async () => {
    const response = await fetch(
      "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions",
      { method: "GET" }
    );
    return (await response.json()) as questionType[];
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<questionType>) => {
      state.questions.push(action.payload);
      console.log(state.questions);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestion.pending, (state) => {
        state.questionsLoading = true; // Set loading to true when fetchQuestion is pending
      })
      .addCase(fetchQuestion.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.questionsLoading = false; // Set loading to false when fetchQuestion is fulfilled
      })
      .addCase(fetchQuestion.rejected, (state) => {
        console.log("Error fetching questions");
        state.questionsLoading = false; // Set loading to false when fetchQuestion is rejected
      });
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
