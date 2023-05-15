import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { SimpleSlider } from "../components/SimpleSlider";
import { randomPokemonURL, generationURL, pokemonURL } from "../api";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Pokemon from "../components/Pokemon";

const Home = () => {
  const [randomData, setRandomData] = useState([]);
  const [generation, setGeneration] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [searched, setSearched] = useState([]);

  const fetchData = async () => {
    //Fetch Axios
    const randomPokemon = await axios.get(randomPokemonURL());
    const generationCall = await axios.get(generationURL());
    const pokemonData = await axios.get(pokemonURL());

    //setPokemonUrl(randomPokemon.data.results);
    //getRandomPokemon(randomPokemon.data.results);
    getGeneration(generationCall.data.results);
    getPokemon(pokemonData.data.results);
  };

  //Get pokemon url
  /*
  const getPokemon = async (response) => {
    response.map(async (item) => {
      const response = await axios.get(item.url);
      setPokemonData((state) => [...state, response.data]
      );
    });
  };*/

  const getPokemon = async (response) => {
    const pokemonData = await Promise.all(
      response.map(async(item) => {
        const response = await axios.get(item.url);
        return response.data;
      })
    );
    setPokemonData((state) => {
      const newState = [...state, ...pokemonData];
      newState.sort((a,b) => a.id > b.id ? 1 : -1);
      return newState;
    })
  } 

  //Get random pokemon url
  const getRandomPokemon = async (response) => {
    response.map(async (item) => {
      const response = await axios.get(item.url);
      setRandomData((state) => [...state, response.data]);
    });
  };

  //Get generation url
  const getGeneration = async (response) => {
    response.map(async (item) => {
      const response = await axios.get(item.url);
      setGeneration((state) => [...state, response.data]);
    });
  };

  useEffect(() => {
    fetchData();
  }, [setPokemonData, setSearched]);

  return (
    <div>
      <Container>
        {/*<SimpleSlider randomPokemon={randomData}/>*/}
        <Search
          generation={generation}
          setGeneration={setGeneration}
          pokemon={pokemonData}
          setPokemonData={setPokemonData}
          searched={searched}
          setSearched={setSearched}
        />
        {searched.length ? (
          <>
            <h2>Search Results</h2>
            <SearchBox>
              {searched.slice().reverse().map((pokemon) => (
                <Pokemon
                  data={pokemon}
                  setPokemonData={setPokemonData}
                  key={pokemon.id}
                  type={pokemon.types[0].type.name}
                  pokemonData={pokemonData}
                />
              ))}
            </SearchBox>
          </>
        ) : (
          ""
        )}
        <PokemonGrid>
          {pokemonData.length > 0 ? (
            pokemonData.map((pokemon) => (
              <Pokemon
                data={pokemon}
                setPokemonData={setPokemonData}
                key={pokemon.id}
                type={pokemon.types[0].type.name}
                pokemonData={pokemonData}
              />
            ))
          ) : (
            <Loading>
              <p>Loading Data...</p>
            </Loading>
          )}
        </PokemonGrid>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: auto;
  padding: 2rem 10rem;
  h2 {
    //padding: 1rem 0rem;
  }
  @media (max-width: 1200px) {
    padding: 2rem 5rem;
  }
`;

const PokemonGrid = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)
  ); //repeat 350 minimun space for column, if not enough space then take rest of the space with 1fr
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
