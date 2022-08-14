import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import "./login.styles.css";

// user api hook

import { useUserLoginMutation } from "../../features/user/userApi";
import { setUser } from "../../features/user/authSlice";

const Login = () => {
  const [userName, setUserName] = useState("zackh41@gmail.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, { isError, error }] = useUserLoginMutation();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    let res = await userLogin({ email: userName, password });

    if (res.data) {
      dispatch(
        setUser({
          name: res.data.name,
          email: res.data.email,
          token: res.data.token,
          _id: res.data._id,
          isAdmin: res.data.isAdmin,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    }
  };

  return (
    <div className="container">
      <Row className="mt-5 h-full d-flex justify-content-center align-items-center">
        <Col xs={8}>
          <Card>
            <Card.Body>
              {isError && <>{error.data.message}</>}
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
