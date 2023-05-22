import styled from "styled-components";
import pokeball from "../images/pokeball.png";
import search from "../images/search.svg";
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <NavContainer>
      <StyledLink to="/">
        <h3>React PokeApi</h3>
      </StyledLink>
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
  padding: 0.5rem 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d84242;
  color: white;

  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Pokeball = styled.div`
  img {
    width: 50px;
  }
`;

const Links = styled.div`
  display: flex;
  h3 {
    margin-left: 2rem;
  }

  @media (max-width: 1200px) {
    h3{
      margin-left: 1rem;
    }
    
  }
`;

export default Navigation;
