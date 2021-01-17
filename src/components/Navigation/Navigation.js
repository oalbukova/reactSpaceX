import React from "react";
import Logo from "../Logo/Logo.js";
import Menu from "../Menu/Menu";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Logo />
      <Menu />
    </nav>
  );
}

export default Navigation;
