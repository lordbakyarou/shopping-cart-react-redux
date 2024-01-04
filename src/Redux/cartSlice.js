import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.item.id === newItem.item.id
      );

      if (!existingItem) {
        state.cart.push(newItem);
      }
    },
    removeFromcart: (state, action) => {
      state.cart = state.cart.filter((x, index) => index !== action.payload.id);
      console.log(action.payload.id);
    },
    emptyAllItems: (state, action) => {
      state.cart = new Array();
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromcart, emptyAllItems } = cartSlice.actions;
