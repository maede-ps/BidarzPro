import React, { useState } from 'react';
import { faqs } from '../../constants/data';
import '../../components/Accordion/accordion.css';
import { GoDot } from "react-icons/go";
import transformer from '../../assets/transformer 2 1.png';
import { GoDotFill } from "react-icons/go";
import Accordion from '../../components/Accordion/Accordion';

const ListItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0); // Track the index of the hovered item

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='listItemsContainer'>
      <div className='headerText'>
        چرا باید در بیدارز پرو معامله کنید؟
      </div>
      <Accordion/>
      <div className='accordionWrapper'>
        {/* First List for items 1 to 3 */}
        <ul className="accordion">
          {faqs.slice(0, 3).map((faq, index) => (
            <li 
              key={index} 
              className={`secondListItems accordion_item ${hoveredIndex === index ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="button">
                <img src={faq.icon} alt="" /> {faq.question}
                <span className="control">{hoveredIndex === index ? <GoDotFill /> : <GoDot />}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Answer Div */}
        <div className={`answer_wrapper ${hoveredIndex !== null ? "active" : ""}`}>
          {hoveredIndex !== null && (
            <div className="answer">
              <span>{faqs[hoveredIndex].answer}</span>
              <img src={transformer} alt="Transformer" />
            </div>
          )}
        </div>

        {/* Second List for items 4 to 6 */}
        <ul className="accordion">
          {faqs.slice(3, 6).map((faq, index) => (
            <li 
              key={index + 3} 
              className={`accordion_item ${hoveredIndex === index + 3 ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index + 3)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="button">
                <img src={faq.icon} alt="" /> {faq.question}
                <span className="control">{hoveredIndex === index + 3 ? <GoDotFill /> : <GoDot />}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItems;
