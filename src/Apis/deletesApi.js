import axios from "axios";

export const deleteTask = async (id) => {
  try {
    const backend_Url = process.env.REACT_APP_BACKEND_URL;
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.delete(
      `${backend_Url}/user/task/delete/${id}/`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
