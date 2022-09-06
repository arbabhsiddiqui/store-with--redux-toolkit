import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

// api hook import
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../features/product/productApi";

const ProductForm = () => {
  // const
  const navigate = useNavigate();
  const location = useLocation();

  // state
  const [name, setName] = useState("Name");
  const [brand, setBrand] = useState("Name");
  const [countInStock, setCountInStock] = useState(5);
  const [price, setPrice] = useState("price");
  const [description, setDescription] = useState("description");
  const [category, setCategory] = useState("category");
  const [image, setImage] = useState("img");
  const [btnText, setBtnText] = useState("Add");

  // api hooks
  const [
    AddProduct,
    {
      isError: isAddError,
      isLoading: isAddLoading,
      isSuccess: isAddSuccess,
      data: addSuccess,
      error: addError,
    },
  ] = useAddProductMutation();
  const [
    UpdateProduct,
    {
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      data: updateSuccess,
      error: updateError,
    },
  ] = useUpdateProductMutation();

  // page load event
  useEffect(() => {
    if (location.state) {
      setName(location.state.name);
      setPrice(location.state.price);
      setCategory(location.state.category);
      setBrand(location.state.brand);
      setCountInStock(location.state.countInStock);
      setDescription(location.state.description);
      setImage(location.state.image);
      setBtnText("update");
    }
  }, []);

  // handle function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (location.state) {
      await UpdateProduct({
        _id: location.state._id,
        name,
        price,
        description,
        category,
        image,
        brand,
        countInStock,
      });
    } else {
      await AddProduct({
        name,
        price,
        description,
        category,
        image,
        brand,
        countInStock,
      });
    }

    console.log({
      name,
      price,
      description,
      category,
      image,
      brand,
      countInStock,
    });
  };

  return (
    <div className="container ch-100">
      <div className="row  mt-5">
        <div className="col-6 py-3 mx-auto">
          {/* add */}
          {isAddError && <h1>Add Error</h1>}
          {isAddSuccess && <>Product Added Successfully</>}
          {/* update */}
          {isUpdateError && <h1>Update Error</h1>}
          {isUpdateSuccess && <>Product Update Successfully</>}
          <div
            className="btn btn-primary mb-3"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </div>
          <form onSubmit={handleSubmit}>
            {/* item  */}
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Product Title"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
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
                    Product Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Product Price"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* item  */}
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Product Brand
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Product Title"
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
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
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* item  */}
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Product In Stock
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Product In Stock"
                    value={countInStock}
                    onChange={(e) => {
                      setCountInStock(e.target.value);
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
                    Product Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="image url"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* item  */}
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
              {btnText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
