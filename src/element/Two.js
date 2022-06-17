import React from "react";
import two from "../images/2.jpeg";

const Two = () => {
    const to = () => {
        window.location.href='/slide';
      };
  return (
    <div>
        <img onClick={to} src={two} alt="웬디는 예쁘다" />
    </div>
  );
};

export default Two;
