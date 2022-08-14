import { configureStore } from "@reduxjs/toolkit";
import MetaMaskConnectorReducer from "../contexts/Web3ProviderContext/ConnectToMetamaskSlice";
import ContractReducer from "../contexts/Web3ProviderContext/ContractSlice"
export const store = configureStore({
  reducer: { MetaMaskConnectorReducer, ContractReducer, },
});
