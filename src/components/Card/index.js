import React from "react";
import Cardfooter from "./Cardfooter";
import Cardbody from "./Cardbody";
import Cardtop from "./Cardtop";

const Card = ({card}) => {
  return (
    <div>
      <Cardtop  />
      <Cardbody />
      <Cardfooter />
    </div>
  );
};

export default Card;
