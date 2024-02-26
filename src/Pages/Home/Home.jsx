import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TaskTable from "../../component/home/TaskTable";
import homeStyle from "./home.module.css";
import AddSign from "../../image/add.png";

function Home() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = { Authorization: localStorage.getItem("token") };
  const showtask = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/task`,
        {
          headers,
        }
      );
      await setTask(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showtask();
  }, []);

  return (
    <div className={homeStyle.home}>
      <div className={homeStyle.bts}></div>
      <div className={homeStyle.homeHeads}>
        <h1 className={homeStyle.taskList}>Task List</h1>
        <Link to="/create">
          <img src={AddSign} className={homeStyle.adds} alt="addsign" />
        </Link>
      </div>
      {loading ? <h1>Loading</h1> : <TaskTable task={task} />}
    </div>
  );
}

export default Home;
