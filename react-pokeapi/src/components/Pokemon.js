import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";


const Pokemon = ({ data, setPokemonData, type }) => {
  const PokemonCard = ({ data }) => {
    return (
      <Card>
        <CardDetail className={`${type}`}>
          <CardNumber>
            <h2>#{data.id}</h2>
          </CardNumber>
          <CardImage>
            <img src={data.sprites.front_default} alt={data.name} />
          </CardImage>
        </CardDetail>
        <CardName>
          <h2>{data.name}</h2>
        </CardName>
        <Type>
          {data.types.map((item) => (
            <div className={`${item.type.name} type`} key={item.type.name}>
              <h3>{item.type.name}</h3>
            </div>
          ))}
        </Type>
      </Card>
    );
  };

  return <div>{type && <PokemonCard data={data} />}</div>;
};

const Card = styled.div`
  text-align: center;
  box-shadow: 0px 2px 10px #888888;
  position: relative;
  border-radius: 8px;
  img {
    width: 150px;
    object-fit: cover;
    margin: auto;
  }
`;

const CardDetail = styled.div``;

const CardNumber = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  h2{
    opacity: 0.4;
    font-size: 3.5rem;
  }
    
`;

const CardName = styled.div`
  text-transform: capitalize;
  h2{
    margin-top: .5rem;
  }
`;

const CardImage = styled.div`
  position: relative;
  z-index: 10;
  padding-top:3rem;
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  h3 {
    text-transform: capitalize;
  }
`;
export default Pokemon;
