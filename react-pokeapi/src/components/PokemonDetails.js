import React, { useState, useEffect } from "react";
import axios from "axios";
import { pokemonDetails } from "../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PokemonBio from "./PokemonBio";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  const { singleId } = useParams();

  const getSpecies = async (pokemon) => {
    try{
      const speciesData = await axios.get(pokemon.species.url);
      setSpecies(speciesData.data);
    }catch (error){
      console.log(error);
    }
  }

    useEffect(() => {
      const fetchData = async () => {
        try{
            const pokemonData = await axios.get(pokemonDetails(singleId));
            setPokemon(pokemonData.data);
            getSpecies(pokemonData.data);
        }catch(error){
            console.log(error);
        }
      };

      fetchData();
    },[singleId, species])

  return (
    <>
    {pokemon ? (
    <PokemonBio pokemon={pokemon} type={pokemon.types[0].type.name} species={species}/>
    ) : (
        <div>
            <p>Loading Data...</p>
        </div>
    )}
    </>
  );
};

export default PokemonDetails;
