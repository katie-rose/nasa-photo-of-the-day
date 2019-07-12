import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  width: 80%;
  margin-left: 120px;
  background-color: black;
  opacity: .6;
`;

export default function Image(props) {
  return (
    <div>
      <img src={props.nasaData.hdurl} width="580px" alt="NASA Photo Of The Day" />
      <Paragraph>{props.nasaData.explanation}</Paragraph>
    </div>
  );
}
