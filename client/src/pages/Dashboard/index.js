import React from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import Button from "../../components/Button/Button";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3ProviderConnect from "../../../src/contexts/Web3ProviderContext/Web3ProviderConnect";
import FurDetective from "../../contracts/FurDetective.json";

const Index = () => {
  const providerOptions = {
    /* See Provider Options Section */
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "INFURA_ID", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "My Awesome App", // Required
        infuraId: "INFURA_ID", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 1, // Optional. It defaults to 1 if not provided
        darkMode: false, // Optional. Use dark theme, defaults to false
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "testnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const connectToWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    console.log(await web3.eth.getAccounts());
  };
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
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
                    $
                    <span className="counters" data-count="307144.00">
                      $307,144.00
                    </span>
                  </h5>
                  <h6>Total Purchase Due</h6>
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
                      $4,385.00
                    </span>
                  </h5>
                  <h6>Total Sales Due</h6>
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
                    $
                    <span className="counters" data-count="385656.50">
                      385,656.50
                    </span>
                  </h5>
                  <h6>Total Sale Amount</h6>
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
                    $
                    <span className="counters" data-count="40000.00">
                      400.00
                    </span>
                  </h5>
                  <h6>Total Sale Amount</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Customers</h5>
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
                  <h5>Suppliers</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user-check"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Purchase Invoice</h5>
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
                  <h5>Sales Invoice</h5>
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
                      <th>SNo</th>
                      <th>Product Code</th>
                      <th>Product Name</th>
                      <th>Brand Name</th>
                      <th>Category Name</th>
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a href="javascript:void(0);">IT0001</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={require("../../../src/styles/dasboard/assets/img/product/product2.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Orange</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>12-12-2022</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a href="javascript:void(0);">IT0002</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={require("../../../src/styles/dasboard/assets/img/product/product3.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Pineapple</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>25-11-2022</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a href="javascript:void(0);">IT0003</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={require("../../../src/styles/dasboard/assets/img/product/product4.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Stawberry</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>19-11-2022</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <a href="javascript:void(0);">IT0004</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={require("../../../src/styles/dasboard/assets/img/product/product5.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Avocat</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>20-11-2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h1> Dashboard home page </h1>
        <Button label="Connect to Metamask" onClick={connectToWallet} />
      </div>
    </div>
  );
};

export default Index;
