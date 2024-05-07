import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ApiContext } from "../context/ApiContext";
const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const { getCategoryList, categoryList,deleteCategoryList } = useContext(ApiContext);

  const editCategoryList = () => {
    console.log();
  };
  //pagination
  const PER_PAGE = 6;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(categoryList.length / PER_PAGE);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mb-4">
          <h1 className="text-info text-center">
            <i className="fa fa-cubes mx-2"></i>CategoryList -{" "}
            {categoryList.length}
          </h1>
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search...."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>

        <div className="col-lg-12">
          <table className="table table-bordered text-center border-primary table-secondary table-hover table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-primary">
                  Category Id
                </th>
                <th scope="col" className="text-primary">
                  Category Name
                </th>
                <th scope="col" className="text-primary">
                  Category Details
                </th>
                <th scope="col" className="text-primary">
                  Active Status
                </th>
                <th scope="col" className="text-primary">
                  Category Url
                </th>
                <th scope="col" className="text-primary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryList
                .slice(offset, offset + PER_PAGE)
                .map((item, index) => {
                  if (
                    item.categoryname
                      .toLowerCase()
                      .match(keyword.toLowerCase()) ||
                    item.categorydetails.toString().match(keyword) ||
                    item.url.toString().match(keyword) ||
                    item.active.toString().match(keyword)
                  )
                    return (
                      <tr key={index}>
                        <td>{item.catid}</td>
                        <td>{item.categoryname}</td>
                        <td>{item.categorydetails}</td>
                        <td>{item.active === "" ? "No Data" : item.active}</td>
                        <td>{item.url}</td>

                        <td>
                          <Link to={"/addCategory"}>
                            <button
                              className="btn btn-warning mx-2 "
                              onClick={editCategoryList.bind(this, item)}
                            >
                              <i className="fa fa-pen-to-square"></i>
                            </button>
                          </Link>

                          <button
                            className="btn btn-danger"
                            onClick={deleteCategoryList.bind(this, item.catid)}
                          >
                            <i className="fa fa-trash "></i>
                          </button>
                        </td>
                      </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* React Paginate */}
      <div className="mb-4 mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination  justify-content-center"}
          pageClassName={"page-item "}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active primary"}
        />
      </div>
    </div>
  );
};

export default CategoryList;
