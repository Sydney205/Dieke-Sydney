import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import ProjectTest from "./Components/ProjectTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Projects" element={<ProjectTest />} />
      </Routes>
    </div>
  );
}

export default App;
