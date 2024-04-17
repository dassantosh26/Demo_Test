import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const Brand = () => {
  const [brandList, setBrandList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState("");

  const getBrand = () => {
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setBrandList(itemList);
        // console.log(itemList);
      });
  };

  const deleteBrand = (brandid) => {
    let url = "https://cybotrix.com/webapi/brand/deleteone";
    let newbrand = { id: brandid };
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newbrand),
    };
    fetch(url, postdata)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getBrand();
      });
  };

  const editBrand = () => {
    console.log();
  };
  useEffect(() => {
    getBrand();
  }, []);

  //pagination
  const PER_PAGE = 6;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(brandList.length / PER_PAGE);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 text-center mt-5 mb-5">
          <h3>
            <i className="fa fa-basket-shopping fa-lg text-primary mx-2 "></i>
            My Brands
          </h3>
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
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Brand Id</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Brand Details</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {brandList.slice(offset, offset + PER_PAGE).map((item, index) => {
                if (
                  item.brandname.toLowerCase().match(keyword.toLowerCase()) ||
                  item.details.toString().match(keyword)
                )
                  return (
                    <tr key={index}>
                      <td>{item.brandid}</td>
                      <td>{item.brandname}</td>
                      <td>{item.details}</td>
                      <td>
                        <Link to={"/addBrand"}>
                          <button
                            className="btn btn-warning mx-2 "
                            onClick={editBrand.bind(this, item)}
                          >
                            <i className="fa fa-pen-to-square"></i>
                          </button>
                        </Link>

                        <button
                          className="btn btn-danger"
                          onClick={deleteBrand.bind(this, item.brandid)}
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

export default Brand;
