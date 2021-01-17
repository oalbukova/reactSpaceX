import React from "react";
import "./Info.css";

function Info() {
  return (
    <section className="info" aria-label="info">
      <ul className="info__list">
        <li className="info__item">
          <p className="info__link">Мы</p>
          <p className="info__link info__link_big">1</p>
          <p className="info__link">на рынке</p>
        </li>
        <li className="info__item">
          <p className="info__link">гарантируем</p>
          <p className="info__link info__link_big">50%</p>
          <p className="info__link">безопасность</p>
        </li>
        <li className="info__item">
          <p className="info__link">календарик за</p>
          <p className="info__link info__link_big">2001<span className="info__link info__link_medium">г.</span></p>
          <p className="info__link">в подарок</p>
        </li>
        <li className="info__item">
          <p className="info__link">путешествие</p>
          <p className="info__link info__link_big">597</p>
          <p className="info__link">дней</p>
        </li>
      </ul>
    </section>
  );
}

export default Info;
