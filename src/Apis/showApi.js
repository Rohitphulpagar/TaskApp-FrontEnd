import axios from "axios";

export const getTaskById = async (id) => {
  try {
    const backend_Url = process.env.REACT_APP_BACKEND_URL;
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.get(`${backend_Url}/user/task/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
