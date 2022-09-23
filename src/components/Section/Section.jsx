import Paragraph from "../Paragraph/Paragraph";
import H2 from "../H2/H2";
import React, { useState } from "react";

let Section = ({ someTxt, isDescription }) => {
  // set state and useState
  // const [isDescription, setIsDescription] = useState(false);

  return (
    <>
      <H2 someText={someTxt.heading} isDescription={!isDescription} />
      <Paragraph someTxt={someTxt.p1} isDescription={isDescription} />
      <Paragraph someTxt={someTxt.p2} isDescription={isDescription} />
    </>
  );
};
//Dear lord don't let me forget this
export default Section;
