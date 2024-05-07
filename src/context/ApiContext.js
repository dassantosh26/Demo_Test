import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [brandList, setBrandList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBrand = () => {
    setIsLoading(true);
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setBrandList(itemList);
        // console.log(itemList);
        setIsLoading(false);
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
  const getCategoryList = () => {
    setIsLoading(true);
    fetch("https://cybotrix.com/webapi/category/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setCategoryList(itemList);
        // console.log(itemList);
        setIsLoading(false);
      });
  };
  const deleteCategoryList = (catid) => {
    const url = "https://cybotrix.com/webapi/category/deleteone";
    const newCat = { id: catid }; // pass categoryid
    const postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newCat),
    };
    fetch(url, postData)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getCategoryList();
      });
  };
  const getproductList = () => {
    setIsLoading(true);
    fetch("https://cybotrix.com/webapi/product/getall")
      .then((res) => res.json())
      .then((itemList) => {
        setProductList(itemList);
        setIsLoading(false);
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
  const searchproduct = (cId, bId) => {
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
    getBrand();
    getCategoryList();
    getproductList();
  }, []);
  return (
    <ApiContext.Provider
      value={{
        brandList,
        getBrand,
        deleteBrand,
        categoryList,
        getCategoryList,
        deleteCategoryList,
        getproductList,
        deleteProduct,
        searchproduct,
        productList,
        isLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
