import React from "react";
import styled from "styled-components";
import Movement from "../element/Movement";

const Move = () => {
  return (
    <>
      <MoveScroll>
        <Movement />
      </MoveScroll>
    </>
  );
};

const MoveScroll = styled.div`
width: 30%;
  margin: 12.5% auto;
  height: 50vh;
  border: 1px solid #000;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  } */
`;

export default Move;
