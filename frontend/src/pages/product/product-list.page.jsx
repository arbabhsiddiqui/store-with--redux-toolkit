import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductsQuery } from "../../features/product/productApi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user || user.isAdmin === undefined || user.isAdmin === false) {
      navigate("/");
    }
  }, [user]);

  const { isLoading, isError, data: products, isSuccess } = useProductsQuery();

  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <div className="col-11">All Products</div>
        <div className="col-1">
          <Link className="btn btn-primary text-right" to="/addproduct">
            Add
          </Link>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.rating.rate}</td>
                <td>
                  <i className="fas fa-pencil-alt"></i>
                  <i
                    onClick={() => {
                      console.log(product.id);
                    }}
                    className="fas fa-trash   ms-3 "
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
