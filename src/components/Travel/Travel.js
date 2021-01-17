import React from "react";
import TravelLine from "../TravelLine/TravelLine";
import "./Travel.css";

function Travel() {
  return (
    <section className="travel">
      <h1 className="travel__title">Путешествие</h1>
      <span className="travel__title-span">на красную планету</span>
      <div className="travel__button-container">
        <button className="travel__btn" type="button">Начать
          путешествие
        </button>
        <TravelLine />
      </div>
    </section>
  );
}

export default Travel;
