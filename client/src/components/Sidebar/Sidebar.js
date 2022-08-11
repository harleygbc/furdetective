import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="active">
                <Link to="/" className="linkHeaderText">
                  <img
                    src={
                      require("../../../src/styles/dasboard/assets/img/icons/dashboard.svg")
                        .default
                    }
                    alt="img"
                  />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <a href="/new-user">
                  <img
                    src={
                      require("../../../src/styles/dasboard/assets/img/icons/product.svg")
                        .default
                    }
                    alt="img"
                  />
                  <span>Add user</span>

                
                </a>
                
              </li>
              <li className="submenu">
                <a href="/new-pet">
                  <img
                    src={
                      require("../../../src/styles/dasboard/assets/img/icons/product.svg")
                        .default
                    }
                    alt="img"
                  />
                  <span>Add Pet</span>
                
                </a>
              </li>
              <li className="submenu">
                <a href="/pet-list">
                  <img
                    src={
                      require("../../../src/styles/dasboard/assets/img/icons/product.svg")
                        .default
                    }
                    alt="img"
                  />
                  <span>Pet List</span>
                 
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <img
                    src={
                      require("../../../src/styles/dasboard/assets/img/icons/product.svg")
                        .default
                    }
                    alt="img"
                  />
                  <span>Menu two</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="productlist.html">Pet List</a>
                  </li>
                  <li>
                    <a href="addproduct.html">Add User</a>
                  </li>
                  <li>
                    <a href="addproduct.html">Add Pet</a>
                  </li>

                  <li>
                    <a href="barcode.html">Print Barcode</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
