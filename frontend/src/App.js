import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import React from "react";
import Test from "./pages/test";
import Enrole from "./pages/enrole";
import Detail from "./pages/Detail";


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/rtl" element={<Rtl />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/enrole" element={<Enrole />} />
          <Route path="/detail/:id" element={<Detail />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
