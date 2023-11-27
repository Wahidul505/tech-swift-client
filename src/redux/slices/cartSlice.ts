import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  cart: any[];
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    checkout: (state, action: PayloadAction<string[]>) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkout } = cartSlice.actions;

export default cartSlice.reducer;
