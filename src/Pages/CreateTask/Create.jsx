import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import createDesign from "./create.module.css";
import { CreateTask } from "../../Apis/createApi";
import BackButton from "../../component/BackButton";
function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveTask = async () => {
    try {
      const taskData = {
        title,
        description,
        dueDate,
      };
      await CreateTask(taskData);
      enqueueSnackbar("book created successuflully", { varient: "success" });
      navigate("/home");
    } catch (error) {
      enqueueSnackbar("Failed to create task", { variant: "error" });
      console.error("Error creating task:", error.message);
    }
  };
  return (
    <div>
      <div className={createDesign.backbtn}>
        <BackButton />
      </div>
      <div className={createDesign.createPart}>
        <h1>Create Task</h1>
        <br />
        <br />
        <div className={createDesign.creForm}>
          <div className={createDesign.boox}>
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
                className={createDesign.texts}
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
            <button onClick={() => handleSaveTask()}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
