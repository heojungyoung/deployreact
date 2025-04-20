import React from "react";
import { Link } from "react-router-dom";

function serveypie() {
  return (
    <>
      <Link to="/done" className="btn-sign-in">
        <span>completed</span>
      </Link>

      <Link to="/survey/:surveyId/0" className="btn-sign-in">
        <span>Sign in</span>
      </Link>
    </>
  );
}

export default serveypie;
