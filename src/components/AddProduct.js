import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");
  const [details, setDetails] = useState("");
  const [brandList, setBrandList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [brandId, setBrandId] = useState("");
  const [catId, setCatId] = useState("");
  const saveProduct = () => {
    if (
      name === "" ||
      price === "" ||
      quantity === "" ||
      photo === "" ||
      details === "" ||
      brandId === "" ||
      catId === ""
    ) {
      alert(`Please Enter Given Input Field`);
    } else {
      const url = "https://cybotrix.com/webapi/product/save";
      const newProduct = {
        productname: name,
        categoryid: catId,
        brandid: brandId,
        price: price,
        quantity: quantity,
        photo: photo,
        details: details,
      };
      let postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(newProduct),
      };
      fetch(url, postData)
        .then((response) => response.text())
        .then((msg) => {
          alert(msg);
          setName("");
          setPhoto("");
          setPrice("");
          setQuantity("");
          setDetails("");
        });
    }
  };

  const getBrand = () => {
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setBrandList(itemList);
        // console.log(itemList);
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

  useEffect(() => {
    getBrand();
    getCategoryList();
  });
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-12 text-center mt-3 mb-3">
          <h3>
            <i className="fa fa-square-plus fa-lg text-info mx-2 "></i>
            Add Product Details
          </h3>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <form>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Product Name
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Brand Name
              </label>
              <div className="col-lg-8">
                <select
                  className="form-select"
                  onChange={(e) => setBrandId(e.target.value)}
                >
                  <option>Brand Name</option>
                  {brandList.map((prod, index) => {
                    return (
                      <option key={index} value={prod.brandid}>
                        {prod.brandname}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Category Name
              </label>
              <div className="col-lg-8">
                <select
                  className="form-select"
                  onChange={(e) => setCatId(e.target.value)}
                >
                  <option>Category Name</option>
                  {categoryList.map((category, index) => {
                    return (
                      <option key={index} value={category.catid}>
                        {category.categoryname}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Product Price
              </label>
              <div className="col-lg-8">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Product Quantity
              </label>
              <div className="col-lg-8">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Product Photo
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPhoto(e.target.value)}
                  value={photo}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Product Details
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                />
              </div>
              <div className="text-center mt-4 mx-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveProduct}
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

export default AddProduct;
