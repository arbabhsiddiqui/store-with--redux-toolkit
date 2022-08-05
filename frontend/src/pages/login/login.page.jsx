import { useEffect, useState } from "react";
import { loginApi, reset } from "../../features/auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import "./login.styles.css";
const Login = () => {
  const [userName, setUserName] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginApi({ username: userName, password: password }));
  };

  return (
    <div className="container">
      <Row className="mt-5 h-full d-flex justify-content-center align-items-center">
        <Col xs={8}>
          <Card>
            <Card.Body>
              {isSuccess && user.token}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
