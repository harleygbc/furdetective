import React from "react";

const PetList = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Pets List</h4>
              <h6>Manage your pets</h6>
            </div>
            <div className="page-btn">
              <a href="addproduct.html" className="btn btn-added">
                <img
                  src={
                    require("../../../src/styles/dasboard/assets/img/icons/plus.svg")
                      .default
                  }
                  alt="img"
                  className="me-1"
                />
                Add New Pet
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <a className="btn btn-filter" id="filter_search">
                      <img
                        src={
                          require("../../../src/styles/dasboard/assets/img/icons/filter.svg")
                            .default
                        }
                        alt="img"
                      />
                      <span>
                        <img
                          src={
                            require("../../../src/styles/dasboard/assets/img/icons/closes.svg")
                              .default
                          }
                          alt="img"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img
                        src={
                          require("../../../src/styles/dasboard/assets/img/icons/search-white.svg")
                            .default
                        }
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img
                          src={
                            require("../../../src/styles/dasboard/assets/img/icons/pdf.svg")
                              .default
                          }
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img
                          src={
                            require("../../../src/styles/dasboard/assets/img/icons/excel.svg")
                              .default
                          }
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img
                          src={
                            require("../../../src/styles/dasboard/assets/img/scruffy.png")
                              
                          }
                          alt="img" 
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            

              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Pet Name</th>
                      <th>gender</th>
                      <th>Animal Type</th>
                      <th>Chip Id</th>
                      <th>Apple Tag</th>
                      <th>Qr Code</th>
                      <th>Breed</th>
                      <th>Time stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
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
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks"></span>
                      </label>
                    </td>
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
                    <td>Breedy</td>
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

export default PetList;
