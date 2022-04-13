import classes from "./Header.module.css";
import beerImage from "../assets/Beer.jpg";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Breweries App</h1>
      <img src={beerImage} alt="A delicious beer!" />
    </header>
  );
};

export default Header;
