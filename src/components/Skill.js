import React from "react";

const Skill = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 mb-3">
          <h3>
          <i className="fa fa-tools fa-lg text-primary mx-2 "></i>
            My Skills</h3>
        </div>
        <div className="col-lg-12">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">SI No</th>
                <th scope="col">Technologies</th>
                <th scope="col">Skill Level</th>
                <th scope="col">Last Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>HTML</td>
                <td>7 Out of 10</td>
                <td>2024</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>CSS</td>
                <td>6 Out of 10</td>
                <td>2024</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>JavaScript</td>
                <td>8 Out of 10</td>
                <td>2024</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Bootstrap</td>
                <td>5 Out of 10</td>
                <td>2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skill;
