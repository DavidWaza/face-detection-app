import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange , isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="Nav">
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("signout")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};
export default Navigation;
