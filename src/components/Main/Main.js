import React from "react";
import mars from "../../images/mars.png"
import Travel from "../Travel/Travel";
import Info from "../Info/Info";
import "./Main.css";


function Main() {
  return (
    <main className="main">
     <Travel />
     <Info />
      <img className="main__img" src={mars} alt="Марс" />
    </main>
  );
}

export default Main;
