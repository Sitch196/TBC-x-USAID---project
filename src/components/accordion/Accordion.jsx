// Accordion.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
      answer: (
        <p className="accordion_subtext">
          I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის
          განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა
          გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული
          განცხადებების გადარჩევა.
          <br />
          <br />
          II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია,
          ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების
          ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ
          შერჩევის შემდეგ ეტაპზე.
          <br />
          <br />
          III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance
          კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა
          უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო
          კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა
          შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს
          ამოწმებს.
          <br />
          <br />
          IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ
          კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით
          კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
        </p>
      ),
      isOpen: false,
    },
    {
      question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
      answer:
        "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
      isOpen: false,
    },
    {
      question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
      answer:
        "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ",

      isOpen: false,
    },
  ]);

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
        <h2>ყველა კითხვა</h2>
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
      </div>
    </section>
  );
};

export default Accordion;
