import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import searchIcon from "../images/search-icon.svg";

const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  background: var(--medGrey);
  max-width: var(--maxWidth);
  border-radius: 50px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    height: 30px;
    margin-left: 10px;
  }
  input {
    height: 50px;
    width: 90%;
    margin-left: 5px;

    background: transparent;
    color: white;
    outline: none;
    font-size: var(--fontMed);
    border: none;
  }
`;

const Search = ({ setSearchTerm }) => {
  const [term, setTerm] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    setTimeout(() => {
      setSearchTerm(term);
    }, 1000);
  }, [term, setSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search for a movie"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default Search;
