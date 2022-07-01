import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <div className="">
      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
