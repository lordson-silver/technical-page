import { useState } from "react";
import classes from "./Paragraph.module.css";

let Paragraph = ({ someTxt, isDescription }) => {
  return <p className={isDescription ? classes.p : classes.pDesc}>{someTxt}</p>;
};

export default Paragraph;
