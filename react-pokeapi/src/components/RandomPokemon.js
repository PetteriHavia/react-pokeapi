import React from "react";
import styled from "styled-components";

const RandomPokemon = ({ pokemon, type}) => {
  const cardColor = type;

  return (
    <CardContainer>
      <div className={`${cardColor} card`}>
        <CardTittle>
          <h3>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
        </CardTittle>
        <Image>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Image>
        <PokeNumber>
          <h3>#{pokemon.id}</h3>
        </PokeNumber>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  text-align: center;
  align-self: center;
  padding: 1rem 2rem;
`;

/*
const Card = styled.div`
  background: ${(props) => props.bg};
  padding: 0.5rem;
`;
*/

const CardTittle = styled.div`
  padding: 1rem 0rem 0rem 0rem;
`;

const Image = styled.div`
  img {
    width: 80%;
    object-fit: cover;
    margin: auto;
  }
`;

const PokeNumber = styled.div`
    padding: 0rem 0rem 1rem 0rem;
`;

export default RandomPokemon;
