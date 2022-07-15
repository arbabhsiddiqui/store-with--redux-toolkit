import axios from "axios";

// login
const login = async (userData) => {
  const res = await axios.post(`https://fakestoreapi.com/auth/login`, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

// logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;
