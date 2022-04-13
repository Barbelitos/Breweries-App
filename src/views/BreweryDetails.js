import Header from "../components/Layout/Header";
import DetailsCard from "../components/UI/DetailsCard";

import { useLocation } from "react-router-dom";

const BreweryDetails = (props) => {
  const location = useLocation();

  const brewery = location.state;

  return (
    <div>
      <Header />
      <DetailsCard brewery={brewery} />
    </div>
  );
};

export default BreweryDetails;
