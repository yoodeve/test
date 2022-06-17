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

const InDiv = styled.div`
background-image: url('${(props) => props.src}');
  /* border: 1px solid #000; */
  width: 100%;
  height: 50vh;
  margin: auto;
  overflow: hidden;
  background-size: contain;
background-repeat: no-repeat;
`;

export default Movement;