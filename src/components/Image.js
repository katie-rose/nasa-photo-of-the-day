import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  width: 80%;
  margin-left: 120px;
  background-color: black;
  opacity: 0.6;

  @media only screen and (max-width: 600px) {
    width: 95%;
    margin-left: 0;
    padding: 25px;
    text-align: left;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
    margin-left: 0;
    padding: 25px;
    text-align: left;
  }

  @media only screen and (max-width: 812px) {
    width: 95%;
    margin-left: 0;
    padding: 25px;
    text-align: left;
  }
`;

export default function Image(props) {
  return (
    <div>
      <img
        src={props.nasaData.hdurl}
        width="580px"
        alt="NASA Photo Of The Day"
      />
      <Paragraph>{props.nasaData.explanation}</Paragraph>
    </div>
  );
}
