import React from "react";
import { useState } from "react";

import { useAddProductMutation } from "../../features/product/productApi";

const AppProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");

  const [AddProduct, { isError, isLoading, isSuccess, data, error, message }] =
    useAddProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click", {
      title,
      price,
      description,
      category,
      img,
    });
    let product = {
      title,
      price,
      description,
      category,
      img,
    };

    await AddProduct(product);
  };

  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-8 mx-auto">
          {isError && <>{error}</>}
          {isSuccess && <>{data.id && "Product Added Successfully"}</>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Product Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Product Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Product Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Product Price
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="image url"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppProduct;
