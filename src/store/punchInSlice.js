import { createSlice } from '@reduxjs/toolkit';

const punchInSlice = createSlice({
  name: 'punchIn',
  initialState: {
    hasPunchedIn: false,
  },
  reducers: {
    userPunchedIn: (state) => {
      state.hasPunchedIn = true;
    },
    userPunchedOut: (state) => {
      state.hasPunchedIn = false;
    },
  },
});

export const { userPunchedIn, userPunchedOut } = punchInSlice.actions;
export default punchInSlice.reducer;