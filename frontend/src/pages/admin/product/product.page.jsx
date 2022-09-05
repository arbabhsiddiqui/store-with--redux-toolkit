import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductTable from "./product-table.page";
import ProductForm from "./product-form.page";

const AdminProduct = () => {
  return (
    <Routes>
      <Route index element={<ProductTable />} />
      <Route path="/add" element={<ProductForm />} />
      <Route path="/edit/:id" element={<ProductForm />} />
    </Routes>
  );
};

export default AdminProduct;
