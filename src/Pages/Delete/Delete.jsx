import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import deleteDesign from "./delete.module.css";
import { deleteTask } from "../../Apis/deletesApi";
import BackButton from "../../component/BackButton";
function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = async () => {
    try {
      await deleteTask(id);
      enqueueSnackbar("task deleted succesufully", { varient: "success" });
      navigate("/home");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("error", { variant: "error" });
    }
  };

  return (
    <div>
      <div className={deleteDesign.backbtn}>
        <BackButton />
      </div>
      <div className={deleteDesign.deletes}>
        <div className={deleteDesign.deleted}>
          <h1>Delete Task</h1>
          <h3>Are you sure want to delete this task?</h3>
          <button onClick={handleDelete}>Yes,Delete it</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
