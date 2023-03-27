import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    decrementByValue: (state, action) => {
      state.value -= action.payload;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, decrementByValue, increment, incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
