import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";

export const rootReducer = {
  checkout: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
