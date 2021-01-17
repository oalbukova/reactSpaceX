import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <NavLink exact to="/" className="logo" title="Вы на главной странице">
      <div className="logo__border">
        <img className="logo__img" src={logo} alt="logo" lang="en" />
      </div>
    </NavLink>
  );
}

export default Logo;
