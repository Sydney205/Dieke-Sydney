import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import ProjectTest from "./Components/ProjectTest";
import ProjectTest2 from "./Components/ProjectTest2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Projects" element={<ProjectTest />} />
        <Route path="ProjectTest2" element={<ProjectTest2 />} />
      </Routes>
    </div>
  );
}

export default App;
