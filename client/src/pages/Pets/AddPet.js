import React from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js";
const AddPet = () => {
 
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
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Gender</label>
                    <select className="select">
                      <option>Choose Category</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Breed</label>
                    <select className="select">
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
                    <select className="select">
                      <option>Choose animal type</option>
                      <option>Cat</option>
                      <option>Dog</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
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
                  <a href="javascript:void(0);" className="btn btn-submit me-2">
                    Submit
                  </a>
                  <a href="productlist.html" className="btn btn-cancel">
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
