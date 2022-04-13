import Card from "./Card";
import classes from "./BreweriesContainer.module.css";

const BreweriesContainer = (props) => {
  return (
    <div className={classes["breweries-container"]}>
      {props.breweries.map((brewery) => (
        <Card
          key={brewery.id}
          name={brewery.name}
          type={brewery.type}
          city={brewery.city}
          brewery={brewery}
          s
        />
      ))}
    </div>
  );
};

export default BreweriesContainer;
