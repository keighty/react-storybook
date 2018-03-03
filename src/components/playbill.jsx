import React from "react";
import styled from "styled-components";

const PlaybillContainer = styled.div`
  height: 415px;
  width: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlaybillHeader = styled.div`
  padding: 10px 0 10px 0;
  font-size: x-large;
  max-height: 2em;
  text-align: center;
  width: 100%;
  background-color: yellow;
  border-bottom: 1.5px solid black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2.5px;
`;

const PlaybillTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: large;
  max-width: 95%;
`;

const PlaybillImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  width: 250px;
  margin-bottom: 10px;
`;

const Playbill = ({ title, imageUrl }) => {
  return (
    <PlaybillContainer>
      <PlaybillHeader>Virtual Playbill</PlaybillHeader>
      <PlaybillTitle>{title}</PlaybillTitle>
      <PlaybillImage src={imageUrl} />
    </PlaybillContainer>
  );
};

export default Playbill;
