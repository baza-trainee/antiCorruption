import "./counteract.scss";
import Plus from "../../assets/counteract/ph_plus-thin.svg";
import Minus from "../../assets/counteract/ph_minus-thin.svg";

const Counteract = ({ questions, activeId, toggleQuestion }) => {
  return (
    <div className="counteract__container">
      <h2 className="counteract__heading ">Як протидіяти корупції</h2>
      {questions.map((question) => {
        const { id, title, info, img, alt } = question;
        const isActive = id === activeId;
        const innerClass = `counteract__inner ${
          isActive ? "counteract__inner--open" : ""
        }`;
        return (
          <article key={id} className="counteract__article">
            <div className="counteract__header">
              <div className="counteract__number">
                <img src={img} alt={alt} />
              </div>
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
          </article>
        );
      })}
    </div>
  );
};

export default Counteract;
