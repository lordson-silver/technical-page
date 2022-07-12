import Image from '../../assets/image.png';
import classes from './Logo.module.css'

let Logo = () => {
    return(
      <div className={classes.div}>
        <img className={classes.img} src={Image} alt="ReactLogo"/>
        </div>
    );
};







export default Logo