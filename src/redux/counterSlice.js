import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    // 빼기, 나누기, 곱하기 등...
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
