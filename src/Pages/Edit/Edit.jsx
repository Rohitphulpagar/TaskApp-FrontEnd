import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import style from "./edit.module.css";
import { updateTask } from "../../Apis/editApi";
import { getTaskById } from "../../Apis/showApi";
import BackButton from "../../component/BackButton";
function Create() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const fetchTask = async () => {
    try {
      const response = await getTaskById(id);
      console.log(response.data.title);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDueDate(response.data.dueDate);
    } catch (error) {
      console.log("error occured");
    }
  };
  const handleSavetask = async () => {
    try {
      const taskData = {
        title,
        description,
        dueDate,
      };
      await updateTask(taskData, id);
      enqueueSnackbar("task created successuflully", { varient: "success" });
      navigate("/home");
    } catch (error) {
      enqueueSnackbar("Failed to create task", { variant: "error" });
      console.error("Error creating task:", error.message);
    }
  };
  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  return (
    <div>
      <div className={style.backbtn}>
        <BackButton />
      </div>
      <div className={style.createPart}>
        <h1>Edit Task</h1>
        <br />
        <br />
        <div className={style.creForm}>
          <div className={style.boox}>
            <div>
              <label>Title</label>
              <br />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Description</label>
              <br />
              <textarea
                className={style.texts}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Due date</label>
              <br />

              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <br />
            <button onClick={() => handleSavetask()}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
