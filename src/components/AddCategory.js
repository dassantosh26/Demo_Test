import React, { useState, useEffect } from "react";

const AddCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [cName, setCName] = useState("");
  const [cDetails, setCDetails] = useState("");
  const [cStatus, setCStatus] = useState("");
  const [cUrl, setCUrl] = useState("");

  const saveCategory = () => {
    if (cName === "" || cDetails === "" || cStatus === "" || cUrl === "") {
      alert(`Please Enter Given Input Field`);
    } else {
      const url = "https://cybotrix.com/webapi/category/save";
      const newCat = {
        categoryname: cName,
        categorydetails: cDetails,
        active: cStatus,
        url: cUrl,
      };
      const postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(newCat),
      };
      fetch(url, postData)
        .then((response) => response.text())
        .then((msg) => {
          alert(msg);
          setCName("");
          setCDetails("");
          setCStatus("");
          setCUrl("");
          getCategoryList();
        });
    }
  };
  const getCategoryList = () => {
    fetch("https://cybotrix.com/webapi/category/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setCategoryList(itemList);
        // console.log(itemList);
      });
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-12 text-center mt-5 mb-5">
          <h3>
            <i className="fa fa-plus fa-lg text-info mx-2 "></i>
            Add Category List 
          </h3>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <form>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Category Name
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCName(e.target.value)}
                  value={cName}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Category Details
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCDetails(e.target.value)}
                  value={cDetails}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Category Status
              </label>
              <div className="col-lg-8">
                <select
                  className="form-select"
                  onChange={(e) => setCStatus(e.target.value)}
                  value={cStatus}
                >
                  <option>Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="brandDeatils" className="col-lg-4 col-form-label">
                Category Url
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCUrl(e.target.value)}
                  value={cUrl}
                />
              </div>
              <div className="text-center mt-4 mx-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveCategory}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
