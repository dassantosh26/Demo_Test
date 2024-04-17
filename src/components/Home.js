import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Experience from "./Experience";
import Brand from "./Brand";
import AddBrand from "./AddBrand";
import CategoryList from "./CategoryList";
import AddCategory from "./AddCategory";
import Product from "./Product";
import AddProduct from "./AddProduct";
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
              {/*          <Link to={"/education"} className="btn btn-success">
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
              </Link> */}
              <Link to={"/brand"} className="btn btn-danger">
                <i className="fa fa-warehouse mx-2"></i>
                Brand
              </Link>
              <Link to={"/addBrand"} className="btn btn-secondary">
                <i className="fa fa-cart-plus mx-2"></i>
                Add Brand
              </Link>
              <Link to={"/category"} className="btn btn-info">
                <i className="fa fa-cart-plus mx-2"></i>
                CategoryList
              </Link>
              <Link to={"/addCategory"} className="btn btn-warning">
                <i className="fa fa-plus fa-2x mx-2"></i>
                AddCategory
              </Link>
              <Link to={"/product"} className="btn btn-dark">
                <i className="fa fa-satellite mx-2"></i>
                Product
              </Link>
              <Link to={"/addProduct"} className="btn btn-success">
                <i className="fa fa-square-plus mx-2"></i>
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route exact path="/education" element={<Education />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/experience" element={<Experience />} /> */}
        <Route exact path="/brand" element={<Brand />} />
        <Route exact path="/addBrand" element={<AddBrand />} />
        <Route exact path="/category" element={<CategoryList />} />
        <Route exact path="/addCategory" element={<AddCategory />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
      </Routes>
    </HashRouter>
  );
};

export default Home;
