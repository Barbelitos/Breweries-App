import { useNavigate } from "react-router-dom";
import classes from "./BackButton.module.css";

const BackButton = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <button className={classes["back-button"]} onClick={goBack}>
      {props.text}
    </button>
  );
};

export default BackButton;
