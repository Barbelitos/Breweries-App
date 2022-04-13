import { useNavigate } from "react-router-dom";

import classes from "./CardButton.module.css";

const CardButton = (props) => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/details", { state: props.brewery });
  };

  return (
    <button className={classes["card-button"]} onClick={buttonClickHandler}>
      {props.text}
    </button>
  );
};

export default CardButton;
