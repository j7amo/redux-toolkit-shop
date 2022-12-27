/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isShown: false,
  },
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
