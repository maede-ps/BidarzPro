import { useState } from "react";
import { useRef } from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import transformer from "../../assets/transformer 2 1.png";

const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer, icon } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        <img src={icon} /> {question}
        <span className="control">{clicked ? <GoDotFill /> : <GoDot />} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: `${contentEl.current.scrollHeight + 180}px` }
            : { height: "0px", border: "0px" }
        }
      >
        <div className="answer">
          <span>{answer}</span>
          <img src={transformer} />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
