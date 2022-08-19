import React from "react";

const OwnershipTransfer = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Transfer Ownership</h4>
              <h6>Add a new Pet details</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>New owner Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
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

export default OwnershipTransfer;
