// Accordion.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";
import { FAQ } from "../../helper/FAQ";
const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState(FAQ);

  const toggleAccordion = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  return (
    <section className="accordion_container">
      <div className="accordion_title">
        <h1>ხშირად დასმული კითხვები</h1>
        <h2 className="second_title_button">ყველა კითხვა</h2>
      </div>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${item.isOpen ? "open" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <p className="question">{item.question}</p>
              <div className="arrow">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="accordion-content">
              {item.isOpen && <p className="answer">{item.answer}</p>}
            </div>
          </div>
        ))}
        <div className="all_questions">
          <h3>ყველა კითხვა</h3>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
