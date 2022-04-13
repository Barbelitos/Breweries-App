import Card from "../UI/Card";
import classes from "./BreweriesContainer.module.css";

const BreweriesContainer = (props) => {
  const breweries = props.breweries;

  const renderBreweries = (props) => {
    return breweries.map((brewery) => (
      <Card
        key={brewery.id}
        name={brewery.name}
        type={brewery.type}
        city={brewery.city}
        brewery={brewery}
        s
      />
    ));
  };

  return (
    <div className={classes["breweries-container"]}>
      {breweries.length > 0 ? (
        renderBreweries()
      ) : (
        <p className={classes["not-found"]}>
          No breweries found. Try a different search.
        </p>
      )}
    </div>
  );
};

export default BreweriesContainer;
