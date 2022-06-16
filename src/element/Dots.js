import React from "react";
import styled from "styled-components";

const Dot = ({ num, scrollIdx }) => {
    return <DotDiv num={num} scrollIdx={scrollIdx}></DotDiv>;
};

const DotDiv = styled.div`
  width: 10px;
  height: 10px;
  border: 0.5px solid #000000;
  border-radius: 5px;
  background-color: ${(props) =>
    props.scrollIdx === props.num ? "black" : "transparent"};
  transition-duration: 1000;
  transition: "background-color 0.5s";
`;

const Dots = ({ scrollIdx }) => {
    const keyNum = [0,1,2];
  return (
    <DotsDiv>
        <DotStyle>
            {keyNum.map((i) => {
                return (
                    <Dot num={i} scrollIdx={scrollIdx} key={i} />
                )
            })}
      </DotStyle>
    </DotsDiv>
  );
};

const DotsDiv = styled.div`
  position: fixed;
  top: 50%;
  right: 100px;
`;

const DotStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 100px;
`;

export default Dots;
