import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import { getTaskById } from "../../Apis/showApi";
import showdesign from "./show.module.css";
function ShowBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTaskById(id);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(response.data.dueDate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTask();
  }, [id]);

  return (
    <div>
      <div className={showdesign.backbtn}>
        <BackButton />
      </div>
      <div className={showdesign.name}>
        <h1>Show Task</h1>
      </div>
      <br />
      <div className={showdesign.details}>
        <div className={showdesign.detailstask}>
          <div>
            <label>
              Title : <span>{title}</span>
            </label>
          </div>
          <br />
          <div>
            <label>
              Description : <span>{description}</span>
            </label>
          </div>
          <br />
          <div>
            <label>
              Due date : <span>{dueDate}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBook;
