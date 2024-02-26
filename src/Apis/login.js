import axios from "axios";

export const login = async (username, password) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/user/login`;
    const reqPayload = {
      username: username,
      password: password,
    };
    const response = await axios.post(reqUrl, reqPayload);
    localStorage.setItem("token", response.data.jwtToken);
    return response.data;
  } catch (error) {
    console.error("Error during login: ", error);
    throw error;
  }
};
export const registers = async (username, password) => {
  try {
    const reqUrl = `${process.env.REACT_APP_BACKEND_URL}/user/register`;
    const reqPayload = {
      username: username,
      password: password,
    };
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
