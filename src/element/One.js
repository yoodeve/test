import React from "react";
import one from "../images/1.jpg";

const One = () => {
  const to = () => {
    window.location.href="/move";
  };
  return (
    <div>
      <img onClick={to} src={one} alt="redVelvet so pretty" />
    </div>
  );
};

export default One;
