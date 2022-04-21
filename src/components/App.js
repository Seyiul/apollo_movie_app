import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/apollo_movie_app" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
