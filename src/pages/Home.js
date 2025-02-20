import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { generationURL, pokemonURL } from "../api";
import Search from "../components/Search";
import Pokemon from "../components/Pokemon";
import Loading from '../components/Loading';

const Home = () => {
  const [generation, setGeneration] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [searched, setSearched] = useState([]);

  const getPokemon = async (response) => {
    const pokemonData = await Promise.all(
      response.map(async (item) => {
        const response = await axios.get(item.url);
        return response.data;
      })
    );
    setPokemonData((state) => {
      const newState = [...state, ...pokemonData];
      newState.sort((a, b) => a.id > b.id ? 1 : -1);
      return newState;
    })
  }

  //Get generation url
  const getGeneration = async (response) => {
    response.map(async (item) => {
      const response = await axios.get(item.url);
      setGeneration((state) => [...state, response.data]);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      //Fetch Axios
      const generationCall = await axios.get(generationURL());
      const pokemonData = await axios.get(pokemonURL());
      getGeneration(generationCall.data.results);
      getPokemon(pokemonData.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container>
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
            <Grid>
              {searched.slice().reverse().map((pokemon) => (
                <Pokemon
                  data={pokemon}
                  setPokemonData={setPokemonData}
                  key={pokemon.id}
                  type={pokemon.types[0].type.name}
                  pokemonData={pokemonData}
                />
              ))}
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid>
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
            <Loading />
          )}
        </Grid>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: auto;
  padding: 2rem 10rem;

  @media (max-width: 1200px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
