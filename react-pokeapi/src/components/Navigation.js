import React from "react";
import styled from "styled-components";
import pokeball from '../images/pokeball.png'
import search from '../images/search.svg';

const Navigation = () => {
  return (
    <NavContainer>
      <h3>React PokeApi</h3>
      <Pokeball>
        <img src={pokeball} alt="pokeball" />
      </Pokeball>
      <Links>
        <h3>GitHub</h3>
        <h3>Api</h3>
      </Links>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    padding: .5rem 14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d84242;
    color: white;
`;

const Pokeball = styled.div`
    img{
        width: 50px;
    }
`;

const Links = styled.div`
    display: flex;
    h3{
        margin-left: 2rem;
    }
`;

export default Navigation;
