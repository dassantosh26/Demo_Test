import React from "react";

const Dashboard = () => {
  return (
    <div className="container mb-5">
      <div className="row ">
        <div className="col-xl-12 mt-5 mb-5 ">
          <h2 className="text-center">My Dashboard</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-between ">
        
        <div
          className="col-lg-2 text-center border border-secondary-subtle p-5  "
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <i className="fa fa-book fa-4x text-primary mb-3"></i>
          <h5> Higher Education - MCA </h5>
        </div>
        <div
          className="col-lg-2 text-center border border-secondary-subtle p-5 "
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <i className="fa fa-tools fa-4x text-primary mb-3 "></i>
          <h5> My Skill - 25 </h5>
        </div>
        <div
          className="col-lg-2 text-center border border-secondary-subtle p-5 "
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <i className="fa fa-suitcase fa-4x text-primary mb-3 "></i>
          <h5> Completed Project - 10</h5>
        </div>
        <div
          className="col-lg-2 text-center border border-secondary-subtle p-5 "
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <i className="fa fa-user-tie fa-4x text-primary mb-3 "></i>
          <h5> Project Worked-34 </h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
