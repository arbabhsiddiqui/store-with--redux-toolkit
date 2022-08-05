import axios from "axios";

// login
const login = async (userData) => {
  const res = await axios.post(`https://fakestoreapi.com/auth/login`, userData);
  let user = "";
  if (userData.username == "mor_2314") {
    user = {
      isAdmin: true,
      token: res.data.token,
    };
  } else {
    user = {
      token: res.data.token,
    };
  }

  console.log(user);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
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
