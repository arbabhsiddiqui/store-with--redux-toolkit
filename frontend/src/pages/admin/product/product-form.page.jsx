import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

import { useAddProductMutation } from "../../../features/product/productApi";

const ProductForm = () => {
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
    <div className="container ch-100">
      <div className="row  mt-5">
        <div className="col-6 py-3 mx-auto">
          {isError && <>{error}</>}
          {isSuccess && <>{data.id && "Product Added Successfully"}</>}
          <form onSubmit={handleSubmit}>
            {/* item  */}
            <div className="row">
              <div className="col-6">
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
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
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
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
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
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
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
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Product Price</label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    cols="20"
                    rows="10"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  ></textarea>
                </div>
              </div>
            </div>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
