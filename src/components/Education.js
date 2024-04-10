import React from "react";

const Education = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 mb-3">
          <h3> <i className="fa fa-book fa-lg text-primary mx-2 "></i>My Education</h3>
        </div>
        <div className="col-lg-12">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">SI</th>
                <th scope="col">School/College</th>
                <th scope="col">Education</th>
                <th scope="col">Year</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>School One</td>
                <td>10th</td>
                <td>1428</td>
                <td>A</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>College Two</td>
                <td>12th</td>
                <td>1430</td>
                <td>E</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>College Three</td>
                <td>Btech</td>
                <td>1434</td>
                <td>O</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;
