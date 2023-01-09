import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import UserDetails from "./components/userDetails";
import CreateSmoothie from "./components/createSmoothie";
import AllSmoothies from "./components/allSmoothies";
import SmoothieDetails from "./components/smoothieDetails";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login-user" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/userData" element={<UserDetails />} />
                <Route path="/createSmoothie" element={<CreateSmoothie />} />
                <Route path="/allRecipes" element={<AllSmoothies />} />
                <Route path="/allRecipes/:id" element={<SmoothieDetails />} />
                {/* <Route path="*" element={<Navigate to="/" replace />}></Route> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
