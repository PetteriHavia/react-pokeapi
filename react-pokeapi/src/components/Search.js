import React from "react";
import styled from "styled-components";
import search from "../images/search.svg";
import arrow from '../images/Arrow-down.svg'

const Search = ({ generation, setGeneration }) => {

  const genSelectHandler = (generation) => {
    {/*const genUrl = axios.get()*/}
  } 


  return (
    <SearchContainer>
      <input type="text" placeholder="Search Pokemon" />
      <Icon>
        <img src={search} alt="search" />
      </Icon>
      <SelectDropdown backgroundImage={arrow} onChange={genSelectHandler}>
        <select id="select-generation">
          <option>Generation</option>
          {generation.map((item) => (
            <option value={item.name} key={item.id}>
              {item.main_region.name} 
            </option>
          ))}
        </select>
      </SelectDropdown>
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
    background: #d6d6d6;
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

const SelectDropdown = styled.div`
  height: 2.8rem;
  background-color: #d84242;
  display: flex;
  justify-content: space-between;
  select {
    height: 2.8rem;
    padding: 0rem 1.5rem;
    border: none;
    background-color: #d84242;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    text-transform: capitalize;
    -webkit-appearance: none; /* Remove default arrow */
    -moz-appearance: none;
    appearance: none;
    background-image: url(${props => props.backgroundImage}); /* Add custom arrow */
    background-repeat: no-repeat;
    background-position: right .2rem center; /* Position the arrow */
  }
  option {
    font-size: 1rem;
  }
`;

export default Search;
