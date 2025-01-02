import { api, requestConfig } from "../utils/config";

// PROFILE
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(api + "/Users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// EDIT
const UpdateUser = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(api + "/Users/Update", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// All Users
const allUsers = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Users/show", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// USER DETAILS
const getUserDetails = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/Users/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const userService = {
  profile,
  UpdateUser,
  allUsers,
  getUserDetails,
};

export default userService;
