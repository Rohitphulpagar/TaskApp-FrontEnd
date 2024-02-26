import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Create from "./Pages/CreateTask/Create";
import Delete from "./Pages/Delete/Delete";
import Update from "./Pages/Edit/Edit";
import Show from "./Pages/ShowTask/ShowTask";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tasks/:id" element={<Show />} />
      <Route path="/task/:id" element={<Update />} />
      <Route path="/task/delete/:id" element={<Delete />} />
    </Routes>
  );
}

export default App;
