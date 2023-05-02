import React from "react";
import styled from "styled-components";

const RandomPokemon = ({ pokemon, type }) => {
  const cardColor = type;

  return (
    <CardContainer>
      <div className={`${cardColor} card`}>
        <PokeNumber>
          <h3># {pokemon.id}</h3>
        </PokeNumber>
        <Image>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Image>
        </div>
        <CardTittle>
          <h3>{pokemon.name}</h3>
        </CardTittle>
    </CardContainer>
  );
};
//className={`${cardColor} card`}
const CardContainer = styled.div`
  text-align: center;
  margin: 1rem;
  box-shadow: 0px 2px 10px #888888;
  border-radius: 8px;
  overflow: hidden;
`;

const CardTittle = styled.div`
  background-color: white;
  h3{
    padding: 1.5rem 0rem 1.5rem 0rem;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1rem;
  }
  
`;

const Image = styled.div`
  img {
    width: 70%;
    object-fit: cover;
    margin: auto;
  }
`;

const PokeNumber = styled.div`
  padding: 1.5rem 0rem 1.5rem 0rem;
  h3{
    font-size: 1.3rem;
  }
  
`;

export default RandomPokemon;
