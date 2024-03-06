import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../images/search.svg";
import arrow from "../images/Arrow-down.svg";
import { selectedGenerationURL, searchURL } from "../api";
import axios from "axios";

const Search = ({ generation, setPokemonData, searched, setSearched }) => {
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Get selectfield option value
  const genSelectHandler = async (event) => {
    const genId = parseInt(event.target.value);
    //Check if value is number
    if (isNaN(genId)) {
      return;
    }
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
    setPokemonData(newData.sort((a, b) => (a.id > b.id ? 1 : -1))); //Sort the pokemon by comparing id
  };

  //Search pokemon
  const searchHandler = async () => {
    if (textInput.length === 0) {
      return setErrorMessage("Enter Pokemon Name");
    }
    try {
      const newData = [];
      const formatSearch = textInput.toLowerCase();
      const searchCall = await axios.get(searchURL(formatSearch));
      const newPokemon = searchCall.data;

      // Check if the searched Pokemon already exists in the searched state
      const existingIndex = searched.findIndex(
        (pokemon) => pokemon.id === newPokemon.id
      );

      if (existingIndex !== -1) {
        // Remove the existing Pokemon from the array
        const updatedSearched = searched.filter(
          (pokemon) => pokemon.id !== newPokemon.id
        );
        setSearched([...updatedSearched, newPokemon]);
      } else {
        // Add the new Pokemon to the end of the array
        setSearched((state) => [...state, newPokemon]);
      }
      setTextInput("");
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Pokemon was not found");
      } else {
        setErrorMessage("An error occurred while searching for the Pokemon");
      }
    }
  };

  //Set value for inputText state
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <>
      <ErrorMessage>
        <span>{errorMessage}</span>
      </ErrorMessage>
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
    </>
  );
};

const ErrorMessage = styled.div`
  margin-top: 3rem;
`;

const SearchContainer = styled.div`
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
