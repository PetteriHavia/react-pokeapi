import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { SimpleSlider } from "../components/SimpleSlider";
import { pokemonURL } from "../api";

const Home = () => {
  //const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const fetchData = async () => {
    //Fetch Axios
    const response = await axios.get(pokemonURL());
    //setPokemonUrl(response.data.results);
    getPokemon(response.data.results);
  };

  const getPokemon = async (response) => {
    response.map(async (item) => {
      const response = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, response.data];
        return state;
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(pokemonData);
  return (
    <Container>
      <h2>10 Random Pokemons</h2>
      <SimpleSlider pokemon={pokemonData}/>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: auto;

  h2 {
    padding: 2rem 2rem;
  }
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); //repeat 350 minimun space for column, if not enough space then take rest of the space with 1fr
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
