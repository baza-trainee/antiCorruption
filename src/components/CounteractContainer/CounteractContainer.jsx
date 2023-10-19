import { useState } from "react";
import "./counteractContainer.scss";
import { counteract } from "../../constants";
import Counteract from "../Counteract/Counteract";

const CounteractContainer = () => {
  const [questions, setQuestions] = useState(counteract);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="counteract">
      <div className="grid-container">
        <Counteract
          questions={questions}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      </div>
    </section>
  );
};

export default CounteractContainer;
