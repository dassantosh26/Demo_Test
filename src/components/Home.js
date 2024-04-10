import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Experience from "./Experience";
const Home = () => {
  return (
    <HashRouter>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-4">
            <h1 className="text-warning">
              <i className="fa fa-user-tie fa-lg text-primary mx-2 "> </i>Manage
              Profile
            </h1>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7 text-end">
            <div className="btn-group">
              <Link to={"/"} className="btn btn-primary">
                <i className="fa fa-gears mx-2"></i>
                My Dashboard
              </Link>
              <Link to={"/education"} className="btn btn-success">
                <i className="fa fa-book mx-2"></i>
                My Education
              </Link>
              <Link to={"/skill"} className="btn btn-info">
                <i className="fa fa-tools mx-2"></i>
                My Skills
              </Link>
              <Link to={"/project"} className="btn btn-warning">
                <i className="fa fa-suitcase mx-2"></i>
                My Project
              </Link>
              <Link to={"/experience"} className="btn btn-secondary">
                <i className="fa fa-user-tie mx-2"></i>
                My Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
    </HashRouter>
  );
};

export default Home;
