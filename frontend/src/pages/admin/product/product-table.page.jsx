import React from "react";

import DataTable from "react-data-table-component";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import {
  useDeleteProductMutation,
  useProductsQuery,
} from "../../../features/product/productApi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductTable = () => {
  const { data, isError, error, isLoading, isSuccess } = useProductsQuery();
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const [
    DeleteProduct,
    {
      data: DeleteRes,
      isError: isDeleteError,
      isSuccess: isDeleteSuccess,
      error: DeleteError,
    },
  ] = useDeleteProductMutation();

  const handleUpdate = (item) => {
    navigate(`edit/${item.name}`, { state: item });
  };

  const handleDelete = async (item) => {
    DeleteProduct(item._id);
    console.log(item);
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="btn-container">
          <Button variant="primary" onClick={() => handleUpdate(row)}>
            <FaPencilAlt />
          </Button>
          <Button variant="danger" onClick={() => handleDelete(row)}>
            <FaTrash />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {isLoading && <Spinner animation="border" />}
      {isSuccess && (
        <Container className="">
          <Row>
            <Col className="p-5" sm="12">
              <Button as={Link} to={"add"}>
                Add Product
              </Button>

              {isSuccess && data.products.length > 0 ? (
                <DataTable columns={columns} data={data.products} />
              ) : (
                <>No Data Found</>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductTable;
