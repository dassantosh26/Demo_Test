import React from "react";

const Experience = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 mb-3">
          <h3>
            <i className="fa fa-user-tie fa-lg text-primary mx-2 "> </i>My
            Experience
          </h3>
        </div>
        <div className="col-lg-12">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">SI No</th>
                <th scope="col">Project Name</th>
                <th scope="col">Team Size</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Leads Management</td>
                <td>8</td>
                <td>1 Year</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>HRM</td>
                <td>6</td>
                <td>1.5 Year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Experience;
