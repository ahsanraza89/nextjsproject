import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userWalaSlice } from "./slices/user";
import { productSlice } from "./slices/product";


// agar 2 sy ziada almari ha to root reducer me rkhna main me 

let rootReducer = combineReducers({
  userWalaSlice:userWalaSlice.reducer,
productSlice : productSlice.reducer
});

export let meraStore = configureStore({
  reducer : rootReducer
});



