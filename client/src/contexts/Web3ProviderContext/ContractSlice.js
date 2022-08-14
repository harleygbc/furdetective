import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contractState: null,
 
};

export const contractSlice = createSlice({
  name: "contractConnection",
  initialState,
  reducers: {
    contractData: (state, action) => {
      state.contractState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {contractData}  = contractSlice.actions;

export default contractSlice.reducer;