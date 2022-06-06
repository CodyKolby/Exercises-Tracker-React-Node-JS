import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Navbar />
          <br />
          <Routes>
            <Route path="/" exact element={<ExercisesList />} />
            <Route path="/edit/:id" element={<EditExercise />} />
            <Route path="/create" element={<CreateExercise />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
