/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isShown: false,
    notification: null,
  },
  reducers: {
    clearNotification(state) {
      state.notification = null;
    },
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const { clearNotification, showNotification, toggle } = uiSlice.actions;
export default uiSlice.reducer;
