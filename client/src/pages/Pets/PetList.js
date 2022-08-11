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
                            require("../../../src/styles/dasboard/assets/img/icons/printer.svg")
                              .default
                          }
                          alt="img"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-0" id="filter_inputs">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Product</option>
                              <option>Macbook pro</option>
                              <option>Orange</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Category</option>
                              <option>Computers</option>
                              <option>Fruits</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Sub Category</option>
                              <option>Computer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Brand</option>
                              <option>N/D</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Price</option>
                              <option>150.00</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-6 col-12">
                          <div className="form-group">
                            <a className="btn btn-filters ms-auto">
                              <img
                                src={
                                  require("../../../src/styles/dasboard/assets/img/icons/search-whites.svg")
                                    .default
                                }
                                alt="img"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

                      <th>Action</th>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product1.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Macbook pro</a>
                      </td>
                      <td>PT001</td>
                      <td>Computers</td>
                      <td>N/D</td>
                      <td>1500.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product2.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Orange</a>
                      </td>
                      <td>PT002</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product3.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Pineapple</a>
                      </td>
                      <td>PT003</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product4.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Strawberry</a>
                      </td>
                      <td>PT004</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product5.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Avocat</a>
                      </td>
                      <td>PT005</td>
                      <td>Accessories</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>150.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product6.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Macbook Pro</a>
                      </td>
                      <td>PT006</td>
                      <td>Shoes</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product7.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Apple Earpods</a>
                      </td>
                      <td>PT007</td>
                      <td>Shoes</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product8.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">iPhone 11 </a>
                      </td>
                      <td>PT008</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product9.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">samsung </a>
                      </td>
                      <td>PT009</td>
                      <td>Earphones</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product11.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Banana</a>
                      </td>
                      <td>PT0010</td>
                      <td>Health Care</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>kg</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src="assets/img/icons/delete.svg" alt="img" />
                        </a>
                      </td>
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
                            src={require("../../../src/styles/dasboard/assets/img/product/product17.jpg")}
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Limon</a>
                      </td>
                      <td>PT0011</td>
                      <td>Health Care</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>kg</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/eye.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/edit.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img
                            src={
                              require("../../../src/styles/dasboard/assets/img/icons/delete.svg")
                                .default
                            }
                            alt="img"
                          />
                        </a>
                      </td>
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
