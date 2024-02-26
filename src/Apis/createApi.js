import axios from "axios";
export const CreateTask = async (taskData) => {
  try {
    const backend_Url = process.env.REACT_APP_BACKEND_URL;
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.post(
      `${backend_Url}/user/createTask`,
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
