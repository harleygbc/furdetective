import React, {useRef} from "react";

import { useSelector, useDispatch } from "react-redux";

const AddUser = () => {

  // Access data from redux
  const connectedWeb3Account = useSelector(
    (state) => state.MetaMaskConnectorReducer.web3Account
  );
  const contractData = useSelector(
    (state) => state.ContractReducer.contractState
  );
    let fullName = useRef(null);
    let cellPhone = useRef(null);
    let email = useRef(null);
    let location = useRef(null);

    const handleUserSubmit = async (event) => {
      const address = connectedWeb3Account.web3Account[0]
      console.log(contractData.contractData)
      fullName = fullName.current.value;
      cellPhone = cellPhone.current.value;
      email = email.current.value;
      location = location.current.value;
      const contract = contractData.contractData
      registerPetOwner(contract, address, fullName, cellPhone, email, location)
      event.target.reset();

  }
  const registerPetOwner = async (contract, address, fullName, cellPhone, email, location) => {
    await contract.methods.registerPetOwner(fullName, cellPhone, email, location).send({from: address}
      ).on('receipt', function(){
      alert("Transaction sent!")
     
    });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Add User</h4>
              <h6>Add a new user</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text"
                    ref={fullName}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Cell Phone</label>
                    <input type="text"
                    ref={cellPhone}
                     />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" 
                    ref={email}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" 
                    ref={location}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label> Profile Image</label>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
