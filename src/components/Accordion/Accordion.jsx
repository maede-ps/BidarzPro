import { faqs } from "../../constants/data";
import AccordionItem from "./AccordionItem";
import "./accordion.css";

const Accordion = () => {
  return (
    <ul className="accordion mainAccordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;
