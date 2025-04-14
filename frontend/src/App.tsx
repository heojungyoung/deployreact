import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Table";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Main from "../src/components/layout/Main";
import "../src/assets/styles/main.css";
import "../src/assets/styles/responsive.css";
import React from "react";
import Test from "./pages/Test";
import Enroll from "./pages/Enroll";
import Detail from "./pages/Detail";

function App() {
  return (
      <div className="App">

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rtl" element={<Rtl />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/enrole" element={<Enroll />} />
            <Route path="/detail/:id" element={<Detail />} />

          </Routes>

        </BrowserRouter>

      </div>
  );
}

export default App;
