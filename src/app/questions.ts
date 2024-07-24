import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questionType from "../types/questionType";

interface questionState {
  questions: questionType[];
}

const initialState: questionState = {
  questions: [],
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<questionType>) => {
      state.questions.push(action.payload);
      console.log(state.questions);
    },
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
