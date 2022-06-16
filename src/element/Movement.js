import React from "react";
import styled from "styled-components";
import good from '../images/G.png'
import latte from '../images/L.png'
import jeju from '../images/J.png'

const Movement = () => {
    const photoList = [good,latte,jeju]
  return (
    <OutDiv>
        {photoList.map((photo, i) => {
            return(
            <InDiv key={i} src={photo} />
            )
        })}
    </OutDiv>
  );
};

const OutDiv = styled.div`
display: grid;
`

const InDiv = styled.img`
  border: 1px solid #000;
  width: 30%;
  height: 50vh;
  margin: auto;
  overflow: hidden;
`;

export default Movement;
