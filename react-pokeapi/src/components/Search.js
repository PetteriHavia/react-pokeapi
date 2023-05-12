import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../images/search.svg";
import arrow from "../images/Arrow-down.svg";
import { selectedGenerationURL, searchURL } from "../api";
import axios from "axios";

const Search = ({
  generation,
  setPokemonData,
  searched,
  setSearched,
  pokemonData,
}) => {

  const [textInput, setTextInput] = useState('');

  //Get selectfield option value
  const genSelectHandler = async (event) => {
    const genId = event.target.value;
    const generationData = await axios.get(selectedGenerationURL(genId));
    getGenPokemon(generationData.data);
  };

  //Change pokemonData when generation from selectfield is selected
  const getGenPokemon = async (response) => {
    const newData = await Promise.all(
      response.pokemon_species.map(async (item) => {
        const species = await axios.get(item.url);
        const varietiesURL = species.data.varieties[0].pokemon.url;
        const pokemon = await axios.get(`${varietiesURL}`);
        return pokemon.data;
      })
    );
    setPokemonData(newData);
  };

  //
  const searchHandler = async () => {
    const newData = [];
    const formatSearch = textInput.toLowerCase();
    const searchCall = await axios.get(searchURL(formatSearch));
    const test = searchCall.data;
    newData.push(test);
    setSearched((state) => [...state, ...newData]);
    setTextInput('');
  };

  //Set value for inputText state
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        id="search-input"
        value={textInput}
        placeholder="Search Pokemon"
        onChange={handleInputChange}
      />
      <Icon>
        <img src={searchIcon} alt="search" onClick={searchHandler} />
      </Icon>
      <SelectDropdown backgroundImage={arrow}>
        <select id="generation-id" onChange={genSelectHandler}>
          <option>Generation</option>
          {generation.map((item) => (
            <option value={item.id} key={item.id}>
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
    background-image: url(${(props) => props.backgroundImage}); /* Add custom arrow */
    background-repeat: no-repeat;
    background-position: right 0.2rem center; /* Position the arrow */
  }
  option {
    font-size: 1rem;
  }
`;

export default Search;
