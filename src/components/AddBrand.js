import { useState } from "react";
const AddBrand = () => {
  const [brandList, setBrandList] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const getBrand = () => {
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setBrandList(itemList);
        // console.log(itemList);
      });
  };

  const saveBrand = () => {
    // console.log(name + details);
    if (name === "" || details === "") {
      alert(`Please Enter Given Input Field`);
    } else {
      const url = "https://cybotrix.com/webapi/brand/save";
      const newBrand = { brandname: name, details: details };
      const postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(newBrand),
      };
      fetch(url, postData)
        .then((response) => response.text())
        .then((msg) => {
          alert(msg);
          setName("");
          setDetails("");
          getBrand();
        });
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-12 text-center mt-5 mb-5">
          <h3>
            <i className="fa fa-cart-plus fa-lg text-info mx-2 "></i>
            Add Brand Details
          </h3>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <form>
            <div className="form-group row mb-3">
              <label htmlFor="brandName" className="col-lg-4 col-form-label">
                Brand Name
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
              <label htmlFor="brandDeatils" className="col-lg-4 col-form-label">
                Brand Deatils
              </label>
              <div className="col-lg-8">
                <textarea
                  className="form-control"
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                ></textarea>
              </div>
              <div className="text-center mt-4 mx-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveBrand}
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

export default AddBrand;
