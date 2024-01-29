import axios from "axios";
const SERVER_URL = "http://localhost:5000/api";

const registerUser = (data) => {
  return axios.post(SERVER_URL + "/register", data);
};

const checkUserExists = (email) => {
  return axios.post(SERVER_URL + "/check-user", { email });
};

const loginUser = (data) => {
  return axios.post(SERVER_URL + "/login", data);
};

const logoutUser = (data) => {
  return axios.post(SERVER_URL + "/logout", data);
};

const AuthServices = {
  registerUser,
  loginUser,
  checkUserExists,
  logoutUser,
};

export default AuthServices;
