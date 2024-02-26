import axios from "axios";
export const updateTask = async (taskData, id) => {
  try {
    const backend_Url = process.env.REACT_APP_BACKEND_URL;
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.put(
      `${backend_Url}/user/task/${id}`,
      taskData,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
