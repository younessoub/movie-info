import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    height: 40px;
    width: 200px;
    font-size: var(--fontMed);
    cursor: pointer;
    background: var(--darkGrey);
    color: white;
    border-radius: 10px;
    :hover {
      opacity: 0.8;
    }
  }
`;

const More = ({ clicked }) => {
  return (
    <Wrapper>
      <button onClick={clicked}>More Movies...</button>
    </Wrapper>
  );
};

export default More;
