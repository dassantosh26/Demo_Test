/** @format */
import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top mb-5"
      style={{ backgroundColor: "#610761" }}
    >
      <div className="container ">
        <Link className="navbar-brand text-white ">
          <i className="fa fa-building fa-lg mx-2"></i>
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
            {localStorage.getItem("status") === "SUCCESS" ? (
              <>
                <li className="nav-item me-4 ms-2">
                  <Link
                    className="nav-link active text-white"
                    to={"/dashboard"}
                  >
                    <i className="fa fa-home"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item dropdown me-4">
                  <Link
                    className="nav-link active text-white dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-hover="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-warehouse mx-2"></i>
                    Brand
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/brand"}>
                        <i className="fa fa-bars-staggered mx-2"></i>
                        BrandList
                      </Link>
                      <li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/addBrand"}>
                          <i className="fa fa-plus mx-2"></i>
                          Add Brand
                        </Link>
                      </li>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown me-4">
                  <Link
                    className="nav-link active text-white dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-sliders mx-2"></i>
                    Categoty
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/category"}>
                        <i className="fa fa-bars-staggered mx-2"></i>
                        CategotyList
                      </Link>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/addCategory"}>
                          <i className="fa fa-plus mx-2"></i>
                          Add Categoty
                        </Link>
                      </li>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown me-4 ">
                  <Link
                    className="nav-link active text-white dropdown-toggle text-decoration-none"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-satellite mx-2"></i>
                    Product
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/product"}>
                        <i className="fa fa-bars-staggered mx-2"></i>
                        ProductList
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/addProduct"}>
                        <i className="fa fa-plus mx-2"></i>
                        Add product
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : null}

            <li className="nav-item me-4">
              {localStorage.getItem("tokenno") ? (
                <Link className="nav-link active text-white" to={"/dashboard"}>
                  <i className="fa fa-user"></i> {localStorage.getItem("name")}
                </Link>
              ) : (
                ""
              )}
            </li>
            {localStorage.getItem("status") === "SUCCESS" ? (
              <>
                <Link className="nav-item me-4 text-decoration-none">
                  <button
                    className="nav-link active text-white "
                    onClick={logout}
                  >
                    <i className="fa fa-power-off"></i> Logout
                  </button>
                </Link>
              </>
            ) : (
              <Link className="nav-link active text-white ms-2" to={"/"}>
                <i className="fa fa-lock"></i> Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
