import React from "react";
import { Link } from "react-router-dom";
import tableDesign from "./homecss/tasktable.module.css";
import deletes from "../../image/delete.png";
import details from "../../image/detail.png";
import edits from "../../image/edit.png";
function BooksTable({ task }) {
  return (
    <table className={tableDesign.tableStart}>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>DESCRIPTION</th>
          <th>Due date</th>
          <th>Operation</th>
        </tr>
      </thead>
      {task && task.length > 0 ? (
        <tbody>
          {task.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>

              <td>
                <div className={tableDesign.specification}>
                  <Link to={`/tasks/${task._id}`}>
                    <img
                      className={tableDesign.edits}
                      src={details}
                      alt="edit"
                    ></img>
                  </Link>
                  <Link to={`/task/${task._id}`}>
                    <img
                      className={tableDesign.edit}
                      src={edits}
                      alt="edit"
                    ></img>
                  </Link>
                  <Link to={`/task/delete/${task._id}`}>
                    {" "}
                    <img
                      className={tableDesign.deletes}
                      src={deletes}
                      alt="edit"
                    ></img>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <p>No task available</p>
      )}
    </table>
  );
}

export default BooksTable;
