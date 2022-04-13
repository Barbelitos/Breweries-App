import CardButton from "./CardButton";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h4>{props.city}</h4>
      <CardButton
        text="View Details"
        name={props.name}
        brewery={props.brewery}
      />
    </div>
  );
};

export default Card;
