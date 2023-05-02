import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { SimpleSlider } from "../components/SimpleSlider";
import { pokemonURL, generationURL } from "../api";
import Search from "../components/Search";
import Navigation from "../components/Navigation";

const Home = () => {
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [generation, setGeneration] = useState([]);

  const fetchData = async () => {
    //Fetch Axios
    const randomPokemon = await axios.get(pokemonURL());
    const generation = await axios.get(generationURL());
    setPokemonUrl(randomPokemon.data.results);
    setGeneration(generation.data.results);
    getPokemon(randomPokemon.data.results);
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

  console.log(generation);
  return (
    <div>
      <Navigation />
      <Container>
        <SimpleSlider pokemon={pokemonData}/>
      <Search generation={generation} setGeneration={setGeneration}/>
      </Container>
    </div>
  );
};


const Container = styled.div`
  margin: auto;
  padding: 2rem 14rem;
  h2 {
    padding: 2rem 0rem;
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
