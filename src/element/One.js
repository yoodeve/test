import React from "react";
import one from "../images/1.jpg";
import { Link } from "react-router-dom";

const One = () => {
  return (
    <div>
      <Link to="/move">
        <img src={one} alt="redVelvet so pretty"/>
      </Link>
    </div>
  );
};

export default One;
