import classes from "./Paragraph.module.css";

let Paragraph = ({ someText }) => {
  return <p className={classes.p}>{someText}</p>;
};

export default Paragraph;
