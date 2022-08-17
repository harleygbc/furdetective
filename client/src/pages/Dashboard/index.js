import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { useSelector, useDispatch } from "react-redux";
import ConnectToMetamask from "components/ConnectToMetamask/ConnectToMetamaskComponent";
import {web3Modal, providerOptions} from  "./../../contexts/Web3ProviderContext/Web3Provider";
import jsonInterface from "./../../contracts/FurDetective.json";
import {contractData} from "./../../contexts/Web3ProviderContext/ContractSlice";

const Index = () => {
  const Contract = require('web3-eth-contract');
  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState(false);
  const connectedWeb3Account = useSelector(
    (state) => state.MetaMaskConnectorReducer.web3Account
  );
 

    const getContract = async() => {
      const provider = await web3Modal.connect();
      Contract.setProvider(provider);
      const contract = new Contract(jsonInterface.abi, 
        process.env.REACT_APP_CONTRACT_ADDRESS);
        const web3 = new Web3(provider);
        console.log("contract --->", contract)
        // console.log(await web3.eth.getAccounts())
      
        // registerPetOwner(contract)
        dispatch(contractData({ contractData: contract}));
        
      
    };

  useEffect(() => {
    getContract();
    console.log(isConnected)
  }, [isConnected]);

  return (
    <div>
      <div className="page-wrapper">
      
        <div className="content">
        {!isConnected ? <ConnectToMetamask/>: ""}
        
          <div className="row">

            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget">
                <div className="dash-widgetimg">
                  <span>
                    <img
                      src={
                        require("../../../src/styles/dasboard/assets/img/icons/dash1.svg")
                          .default
                      }
                      alt="img"
                    />
                  </span>
                </div>
                
                <div className="dash-widgetcontent">
                  <h5>

                    <span className="counters" data-count="307144.00">
                      20
                    </span>
                  </h5>
                  <h6>Users</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash1">
                <div className="dash-widgetimg">
                  <span>
                    <img
                      src={
                        require("../../../src/styles/dasboard/assets/img/icons/dash2.svg")
                          .default
                      }
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <span className="counters" data-count="4385.00">
                      25
                    </span>
                  </h5>
                  <h6>Total transactions</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash2">
                <div className="dash-widgetimg">
                  <span>
                    <img
                      src={
                        require("../../../src/styles/dasboard/assets/img/icons/dash3.svg")
                          .default
                      }
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    
                    <span className="counters" data-count="385656.50">
                      3
                    </span>
                  </h5>
                  <h6>Failed Transactions</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash3">
                <div className="dash-widgetimg">
                  <span>
                    <img
                      src={
                        require("../../../src/styles/dasboard/assets/img/icons/dash4.svg")
                          .default
                      }
                      alt="img"
                    />
                  </span>
                </div>
                
                <div className="dash-widgetcontent">
                
                  <h5>

                    <span className="counters" data-count="40000.00">
                      100
                    </span>
                  </h5>
                  <h6>Successful Transactions</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Pets Recorded</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Basic Registrations</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user-check"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>1</h4>
                  <h5>Ownership Transfers</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file-text"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>105</h4>
                  <h5>veterinary visits</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-body">
              <h4 className="card-title">Pets History</h4>
              <div className="table-responsive dataview">
                <table className="table datatable">
                  <thead>
                    <tr>
                    <th>Pet Name</th>
                    <th>Gender</th>
                    <th>Animal Type</th>
                    <th>Chip Id</th>
                    <th>Apple Tag</th>
                    <th>QR Code</th>
                    <th>Breed</th>
                    <th>Time stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                 
                  <td className="productimgname">
                    <a href="javascript:void(0);" className="product-img">
                      <img
                        src={require("../../../src/styles/dasboard/assets/img/scruffy.png")}
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">Scruffy</a>
                  </td>
                  <td>male</td>
                  <td>dog</td>
                  <td>0011</td>
                  <td>1500</td>
                  <td>Qr code</td>
                  <td>customized Breed</td>
                  <td>16th Aug 2022</td>
              
                </tr>

                <tr>
                 
                <td className="productimgname">
                  <a href="javascript:void(0);" className="product-img">
                    <img
                      src={require("../../../src/styles/dasboard/assets/img/scruffy.png")}
                      alt="product"
                    />
                  </a>
                  <a href="javascript:void(0);">Scruffy</a>
                </td>
                <td>male</td>
                <td>dog</td>
                <td>0011</td>
                <td>1500</td>
                <td>Qr code</td>
                <td>furry Breed</td>
                <td>16th Aug 2022</td>
            
              </tr>
                
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Index;
