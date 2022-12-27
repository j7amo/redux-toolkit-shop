/* eslint-disable no-param-reassign,no-plusplus */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.items[index].quantity++;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity++;
    },
    increaseItemQuantity(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.items[index].quantity++;
      }

      state.totalQuantity++;
    },
    decreaseItemQuantity(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        if (state.items[index].quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
          );
        } else {
          state.items[index].quantity--;
        }
      }

      state.totalQuantity--;
    },
  },
});

export const { addItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
