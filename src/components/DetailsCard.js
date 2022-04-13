import BackButton from "./BackButton";

import classes from "./DetailsCard.module.css";

const DetailsCard = (props) => {
  return (
    <div className={classes["details-card"]}>
      <h2>{props.brewery.name}</h2>
      <p>Type: {props.brewery.type}</p>
      <p>Street: {props.brewery.street}</p>
      <p>City: {props.brewery.city}</p>
      <p>State: {props.brewery.state}</p>
      <BackButton text="Go Back" />
    </div>
  );
};

export default DetailsCard;
