/* eslint-disable no-param-reassign,no-plusplus */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    // this flag is for the cases when we add/remove items locally,
    // and we want to track the moment in time when we should start
    // sending cart data to backend (this helps us to avoid unnecessary
    // data sending after initial app loading and updating the cart with
    // data from the backend
    wasUpdatedLocally: false,
  },
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity;
    },
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
      state.wasUpdatedLocally = true;
    },
    increaseItemQuantity(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.items[index].quantity++;
      }

      state.totalQuantity++;
      state.wasUpdatedLocally = true;
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
      state.wasUpdatedLocally = true;
    },
  },
});

export const {
  addItem, setCart, increaseItemQuantity, decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
