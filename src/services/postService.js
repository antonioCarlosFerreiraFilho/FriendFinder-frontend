import { api, requestConfig } from "../utils/config";

// PUBLISH POST
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/Posts/publishPhoto", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// SHOW POSTS
const allPosts = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Posts/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// GET POST
const getPost = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Posts/getPost/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// COMMENTS
const commentsPost = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/Posts/comments/" + id, config)
      .then((res) => res.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// GET USER POSTS
const getUserPosts = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/Posts/posts/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// LIKE P
const likePositive = async (id, token) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "/Posts/likePositive/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// LIKE N
const likeNegative = async (id, token) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "/Posts/likeNegative/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// SEARCH
const searchPost = async (query) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Posts/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------
// DELET POST
const deletPhoto = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/photos/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};
// UPDATE POST
const editPhto = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/photos/delete/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};
//--------------------------------

const postService = {
  publishPhoto,
  allPosts,
  getPost,
  commentsPost,
  getUserPosts,
  likePositive,
  likeNegative,
  searchPost,
};

export default postService;
