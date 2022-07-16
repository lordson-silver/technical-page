import classes from "./Header.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Image from "../../assets/image.png";
let Header = () => {
  return (
    <header className={classes.react}>
      <div className={classes.txtBox}>
        <h1 className={classes.h1}>Cars</h1>
        <Paragraph someText="A car (or automobile) is a wheeled motor vehicle that is used for transportation." />
        <Paragraph
          someText="Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels,
       and mainly transport people instead of goods."
        />
        <button className={classes.btn}>You have a hero</button>
      </div>
      <img className={classes.img} src={Image} alt="ReactLogo" />
    </header>
  );
};

export default Header;
