import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  web3Account: [],
  web3ConnectionObject: null,
 
};

export const counterSlice = createSlice({
  name: "metamaskConnection",
  initialState,
  reducers: {
    web3Account: (state, action) => {
      state.web3Account = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    web3ConnectionObject: (state, action) => {
      state.web3ConnectionObject = action.payload;
    },
  
  },
});

// Action creators are generated for each case reducer function
export const { web3Account, web3ConnectionObject } =
  counterSlice.actions;

export default counterSlice.reducer;
