import React, { useState } from "react";
import Plus from "../../assets/counteract/ph_plus-thin.svg";
import Minus from "../../assets/counteract/ph_minus-thin.svg";
import "./counteract.scss";

const Counteract = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="counteract__container">
      <h2 className="counteract__heading">Як протидіяти корупції</h2>
      <ul>
        {questions.map((question) => {
          const { id, title, info } = question;
          const isActive = id === activeId;
          const innerClass = `counteract__inner ${
            isActive ? "counteract__inner--open" : ""
          }`;
          return (
            <li key={id} className="counteract__article">
              <div className="counteract__header">
                <div className="counteract__number">{id}</div>
                <h3 className="counteract__title">{title}</h3>
                <button
                  className="counteract__btn"
                  onClick={() => toggleQuestion(id)}
                >
                  {isActive ? (
                    <img src={Minus} alt="minus" />
                  ) : (
                    <img src={Plus} alt="plus" />
                  )}
                </button>
              </div>
              <div className={innerClass}>
                <p className="counteract__info">{info}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Counteract;
