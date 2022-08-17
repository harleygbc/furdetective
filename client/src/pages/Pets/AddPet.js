import React, {useEffect, useState, useRef} from "react";

import "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js";
import { useSelector } from "react-redux";
import { store } from "./../../reduxConfig/store";
import {connect} from 'react-redux';
import QRCode from "react-qr-code";

const AddPet = () => {
  let randomstring = require("randomstring");
  const connectedWeb3Account = useSelector(
    (state) => state.MetaMaskConnectorReducer.web3Account
  );
  
  const contractData = useSelector(
    (state) => state.ContractReducer.contractState
  );
    const generateRandomQRCodes = () =>{
      console.log(randomstring.generate(12))
      return randomstring.generate(12);
    }
  let petName = useRef("")
  let chipId = useRef("") 
  let appleTag = useRef("")
  let qrCode = useRef("")
  let animalType = useRef("")
  let gender = useRef("")
  let breed = useRef("")
  let description = useRef("");
 

  const handleUserSubmit = async () => {
    const address = connectedWeb3Account.web3Account[0]
    console.log(contractData.contractData)
    // let name = petName.current.value;
    // let chipId = chipId.current.value;
    // let appleTag = appleTag.current.value;
    // let animalType = animalType.current.value;
    // let gender = gender.current.value;
    // let breed = breed.current.value;
    // let description = description.current.value;
    let contract = contractData.contractData
    console.log(
      petName.current.value, chipId.current.value, appleTag.current.value, 
      animalType.current.value, gender.current.value, breed.current.value, 
      description.current.value, contractData.contractData)
      registerPetsFunction(contract, address, petName.current.value, chipId.current.value, appleTag.current.value, generateRandomQRCodes(),
      animalType.current.value, gender.current.value, breed.current.value, 
      description.current.value)
      petName.current.value = ""
    // event.target.reset();

}
const registerPetsFunction = async (contract, address, petName, chipId, appleTag, generateRandomQRCodes, animalType, gender, breed, description) => {
  await contract.methods.registerPets(petName, chipId, appleTag, generateRandomQRCodes, animalType, gender, breed, description).send({from: address}
    ).on('receipt', function(){
    alert("Pet Transaction sent!")
   
  });
};

  useEffect(() => {
    
  //  console.log(generateRandomQRCodes())
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Add Pet</h4>
              <h6>Add a new Pet details</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Pet Name</label>
                    <input type="text" 
                    ref={petName}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Chip Id</label>
                    <input type="text" 
                    ref={chipId}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Apple tag</label>
                    <input type="text" 
                    ref={appleTag}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Gender</label>
                    <select className="select" ref={gender}>
                      <option>Choose Category</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Breed</label>
                    <select className="select" ref={breed}>
                      <option>Choose Breed</option>
                      <option>Husky</option>
                      <option>Flur</option>
                      <option>fluffy</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Animal Type</label>
                    <select className="select" ref={animalType}>
                      <option>Choose animal type</option>
                      <option>Cat</option>
                      <option>Dog</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>QR Code</label>
                    <div style={{ background: 'white', padding: '16px' }} >
                   <QRCode value="https://www.furdetective.io/9ORjpgm87GMk-qr1.html" size="350"/>
                 </div>
                  </div>
                </div>
                
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" 
                    ref={description}
                    ></textarea>
                  </div>
                </div>
              
                <div className="col-lg-12">
                  <div className="form-group">
                    <label> Pet Image</label>
                    <div className="image-upload">
                      <input type="file" />
                      <div className="image-uploads">
                        <img
                          src={
                            require("../../../src/styles/dasboard/assets/img/icons/upload.svg")
                              .default
                          }
                          alt="img"
                        />
                        <h4>Drag and drop a file to upload</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                
                <button onClick={handleUserSubmit}
                className="btn btn-submit me-2">
                Submit
                </button>
                  <a href="#" className="btn btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddPet;
