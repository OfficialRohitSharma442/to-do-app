import React from "react";
import Image from "./Image/iconfinder_Google.png";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <img src={Image} alt="logo_Image" />
        <h1>Google Keep</h1>
      </div>
    </React.Fragment>
  );
};
export default Header;
