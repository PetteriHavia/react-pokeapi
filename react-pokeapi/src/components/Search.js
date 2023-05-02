import React from "react";
import styled from "styled-components";
import search from "../images/search.svg";

const Search = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder="Search Pokemon" />
      <Icon>
        <img src={search} alt="search" />
      </Icon>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  input {
    padding: 0.8rem 1rem;
    max-width: 500px;
    width: 100%;
    border: none;
    background: #c7c7c7;
    font-family: "Montserrat", sans-serif;
    outline: none;
    height: 2.8rem;
    font-size: 1.2rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
  }
`;

const Icon = styled.div`
  background: #c7c7c7;
  padding: 0.8rem 0.5rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export default Search;
