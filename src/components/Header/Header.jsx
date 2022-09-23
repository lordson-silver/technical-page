import classes from "./Header.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Image from "../../assets/image.png";
// prop drilling
// children cannot pass props to parents
// siblings are selfish

let Header = ({ isDescription, someTxt }) => {
  return (
    <header className={classes.react}>
      <div className={classes.txtBox}>
        <h1 className={classes.h1}>Cars</h1>
        <Paragraph isDescription={!isDescription} someTxt={someTxt.p1} />
        <Paragraph isDescription={!isDescription} someText={someTxt.p2} />
        <button className={classes.btn}>You have a hero</button>
      </div>
      <img className={classes.img} src={Image} alt="ReactLogo" />
    </header>
  );
};

export default Header;
