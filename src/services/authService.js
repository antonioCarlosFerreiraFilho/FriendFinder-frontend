import { api, requestConfig } from "../utils/config";

// REGISTER
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/Users/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (err) {
    console.log(err);
  }
};

// LOGIN
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/Users/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (err) {
    console.log(err);
  }
};

// LOGOUT
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;