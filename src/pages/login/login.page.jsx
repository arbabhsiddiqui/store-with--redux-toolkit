import { useEffect } from "react";
import { login } from "../../features/auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(login({ username: "mor_2314", password: "83r5^_" }));
  }, []);

  return <div>Login</div>;
};

export default Login;
