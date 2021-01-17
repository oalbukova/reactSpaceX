import React from "react";
import {NavLink} from "react-router-dom";

import "./Menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <NavLink exact to="/" className="menu__link">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/" className="menu__link" >Технология</NavLink>
      </li>
      <li>
        <NavLink to="/" className="menu__link">График полетов</NavLink>
      </li>
      <li>
        <NavLink to="/" className="menu__link">Гарантии</NavLink>
      </li>
      <li>
        <NavLink to="/" className="menu__link">О компании</NavLink>
      </li>
      <li>
        <NavLink to="/" className="menu__link">Контакты</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
