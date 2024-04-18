import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [bId, setBid] = useState("");
  const [cId, setcid] = useState("");

  const getproductList = () => {
    fetch("https://cybotrix.com/webapi/product/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setProductList(itemList);
      });
  };

  const deleteProduct = (productid) => {
    const url = "https://cybotrix.com/webapi/product/deleteone";
    const newCat = { id: productid }; // pass productid
    const postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newCat),
    };
    fetch(url, postData)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getproductList();
      });
  };
  const getCategoryList = () => {
    fetch("https://cybotrix.com/webapi/category/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setCategoryList(itemList);
        // console.log(itemList);
      });
  };
  const getBrand = () => {
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setBrandList(itemList);
        // console.log(itemList);
      });
  };
  const searchproduct = (categoryid = "", brandid = "") => {
   
    let url = "https://cybotrix.com/webapi/product/searchproduct";
    let newcat = { categoryid: cId, brandid: bId }; // pass productid
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newcat),
    };
    fetch(url, postdata)
      .then((response) => response.json())
      .then((msg) => {
        setProductList(msg);
      });
  };

  useEffect(() => {
    getproductList();
    getCategoryList();
    getBrand();
  }, []);
  //pagination
  const PER_PAGE = 6;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(productList.length / PER_PAGE);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h1 className="text-dark text-center">
            <i className="fa fa-cubes mx-2"></i>productList
          </h1>
        </div>
        <div className="col-lg-3 mb-3">
          <div className="text-center mb-2">Search By Category</div>
          <select
            className="form-select"
            onChange={(e) => setcid(e.target.value)}
          >
            <option>Search By Category...</option>
            {categoryList.map((prod, index) => {
              return (
                <option key={index} value={prod.catid}>
                  {prod.categoryname}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-3 mb-3">
          <div className="text-center mb-2">Search By Brand</div>
          <select
            className="form-select"
            onChange={(e) => setBid(e.target.value)}
          >
            <option>Search By Brand...</option>
            {brandList.map((prod, index) => {
              return (
                <option key={index} value={prod.brandid}>
                  {prod.brandname}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-2 mt-4">
          <button className="mt-2 rounded-5" onClick={searchproduct}><i className="fa fa-magnifying-glass  px-3 "></i></button>
          
        </div>
        <div className="col-lg-4 mb-3">
          <div className="text-center mb-2">Search </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search ...."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>

        <div className="col-lg-12">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>CategoryId</th>
                <th>Brand Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Product Photo</th>
                <th>Product Details</th>
                <th>Product Url</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productList
                .slice(offset, offset + PER_PAGE)
                .map((item, index) => {
                  if (
                    item.productname.toString().match(keyword) ||
                    item.price.toString().match(keyword) ||
                    item.quantity.toString().match(keyword) ||
                    item.details.toString().match(keyword) ||
                    item.url.toString().match(keyword)
                  )
                    return (
                      <tr key={index}>
                        <td>{item.productid}</td>
                        <td>{item.categoryid}</td>
                        <td>{item.brandid}</td>
                        <td>{item.productname}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.photo}</td>
                        <td>{item.details}</td>
                        <td>{item.url}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={deleteProduct.bind(this, item.productid)}
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

export default Product;
