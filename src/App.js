import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link //eslint-disable-line no-unused-vars
} from "react-router-dom"

import LandingPage from "./Components/LandingPage/LandingPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={LandingPage()}/>
      </Routes>
    </Router>
  );
}