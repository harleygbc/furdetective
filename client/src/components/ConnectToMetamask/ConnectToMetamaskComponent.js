import React, { useEffect, useState, useCallback } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import jsonInterface from "./../../contracts/FurDetective.json";

import {web3Modal, providerOptions} from  "./../../contexts/Web3ProviderContext/Web3Provider";


import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  web3Account,
  web3ConnectionObject,
} from "./../../contexts/Web3ProviderContext/ConnectToMetamaskSlice";
import {contractData} from "./../../contexts/Web3ProviderContext/ContractSlice";

const ConnectToMetamask = () => {
  
  const Contract = require('web3-eth-contract');

  const connectedWeb3Account = useSelector(
    (state) => state.MetaMaskConnectorReducer.web3Account
  );
  const dispatch = useDispatch();

  
  const connectToWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
   
    
    // console.log(await web3.eth.getAccounts());
    // console.log(contractData());
    // dispatch(contractData({ contractData: "contract"}));
    // dispatch(web3ConnectionObject({ web3ConnectionObject: "contract"}));

    dispatch(web3Account({ web3Account: await web3.eth.getAccounts()}));
   

  };

  // const getContract = async() => {
  //   const provider = await web3Modal.connect();
  //   Contract.setProvider(provider);
  //   const contract = new Contract(jsonInterface.abi, 
  //     "0x2d2D0b20ecA23a145e0aEF06F6dC16899E046bD7");
  //     const web3 = new Web3(provider);
  //     console.log("contract --->", contract)
  //     // console.log(await web3.eth.getAccounts())
    
  //     // registerPetOwner(contract)
  //     dispatch(contractData({ contractData: contract}));
      
    
  // };
// 0x53606EEdEdf236A5382b8e095a7f54A393F8a9Cf
  // const registerPetOwner = async (contract) => {
  //   await contract.methods.registerPetOwner("KenTruffleTest","647","ontario",
  //     "ken@ken.com").send({from: process.env.REACT_APP_ACCOUNT}
  //     ).on('receipt', function(){
  //     console.log("sent")
  //   });
  // };
  useEffect(() => {
    // console.log("Pasedc here")

    // getContract();

  }, []);

  return (
    <div>
      <Button label="Connect to Metamask" onClick={connectToWallet} />
    </div>
  );
};

export default ConnectToMetamask;
