/** @format */

import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const Dashboard = () => {
  const { brandList, categoryList, productList, isLoading } =
    useContext(ApiContext);

  return (
    <div className="container">
      <div className="row mt-3 mb-5">
        <div className="col-lg-12">
          <h2 className="text-center text-info mt-3">
            <i className="fa fa-gears"></i> My Dashboard
          </h2>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i className="fa fa-book fa-4x mb-3 text-primary"></i>
            <h5 className="text-info">
              Available Product
              <p className="text-danger mt-1">
                {isLoading ? "Loading" : productList.length}
              </p>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i className="fa fa-copyright fa-4x mb-3 text-warning"></i>
            <h5 className="text-warning">
              Available Brand
              <p className="text-danger mt-1">
                {isLoading ? "Loading" : brandList.length}{" "}
              </p>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i className="fa fa-list fa-4x mb-3 text-success"></i>
            <h5 className="text-success">
              Available Category
              <p className="text-danger mt-1">
                {isLoading ? "Loading" : categoryList.length}
              </p>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i className="fa fa-shop fa-4x mb-3 text-info"></i>
            <h5 className="text-info">
              Available Seller
              <p className="text-danger mt-1"> Loading ...</p>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i className="fa fa-ban fa-4x mb-3 text-danger"></i>
            <h5 className="text-secondary">
              Cancel Order
              <p className="text-danger mt-1"> Loading...</p>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 mb-4 text-center">
          <div className="bg-light p-4 rounded">
            <i
              className="fa fa-users fa-4x mb-3 "
              style={{ color: "purple" }}
            ></i>
            <h5 style={{ color: "purple" }}>
              All Customer
              <p className="text-danger mt-1"> Loading...</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
