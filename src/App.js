/** @format */

import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Brand from "./components/Brand";
import AddBrand from "./components/AddBrand";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/brand" element={<Brand />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addBrand" element={<AddBrand />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
