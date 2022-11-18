import { useState, useRef } from "react";
import Chevron from "./chevron";
import styled from 'styled-components';

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #fff;
`
const AccordionButton = styled.p`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;

    &:hover, &.active {
        background-color: #ccc;
    }    
`

const ChevronIcon = styled(Chevron)`
    &.accordion__icon {
        margin-left: auto;
        transition: transform 0.6s ease;
    }

    &.rotate {
        transform: rotate(90deg);
    }
`

const AccordionTitle = styled.p`
    font-weight: 600;
    padding: 0;
    font-family: 'Poppins', sans-serif;
`

const AccordionContent = styled.div`
    overflow: auto;
    transition: max-height 0.6s ease;
`

const AccordionText = styled.p`
    padding: 18px;
`

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <AccordionSection className="accordion__section">
      <AccordionButton className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <AccordionTitle className="accordion__title">{props.title}</AccordionTitle>
        <ChevronIcon className={`${setRotate}`} width={10} fill={"#777"} />
      </AccordionButton>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <AccordionText
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </AccordionContent>
    </AccordionSection>
  );
}

export default Accordion;
