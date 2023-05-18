import styled from "styled-components";

const PokemonBio = ({pokemon, type, species}) => {


    return (
      <>
        {species ? (
          <PokemonContainer>
            <Panel className={`${type}`}>
              <PokemonNumber>
                <h2>#{pokemon.id}</h2>
              </PokemonNumber>
              <PokemonImage>
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                />
              </PokemonImage>
              <PokemonName>
                <h2>{pokemon.name}</h2>
              </PokemonName>
            </Panel>
            <Panel>
              <DataSection>
                <h2>Biography</h2>
                <p>{species.flavor_text_entries[0].flavor_text}</p>
                <Detail>
                  <h3>Species:</h3>
                  <h3>{species.genera[7].genus}</h3>
                </Detail>
                <Detail>
                  <h3>Generation:</h3>
                  <h3>{species.generation.name}</h3>
                </Detail>
                <Detail>
                  <h3>Habitat:</h3>
                  <h3>(species?.habitat?.name)</h3>
                </Detail>
                <Detail>
                  <h3>Height:</h3>
                  <h3>{pokemon.height}</h3>
                </Detail>
                <Detail>
                  <h3>Weight:</h3>
                  <h3>{pokemon.weight}</h3>
                </Detail>
                <Detail>
                  <h3>Ablilities</h3>
                  <Abilities>
                  {pokemon.abilities.map((item) => (
                    <h3 key={item.ability.name}>{item.ability.name}</h3>
                  ))}
                  </Abilities>
                </Detail>
              </DataSection>
              <DataSection>
                <h2>Rates</h2>
                <Detail>
                  <h3>Base EXP:</h3>
                  <h3>{pokemon.base_experience} EXP</h3>
                </Detail>
                <Detail>
                  <h3>Growth Rate:</h3>
                  <h3>{species.growth_rate.name}</h3>
                </Detail>
                <Detail>
                  <h3>Capture Rate:</h3>
                  <h3>{species?.capture_rate}</h3>
                </Detail>
                <Detail>
                  <h3>Base Happiness:</h3>
                  <h3>{species?.base_happiness}</h3>
                </Detail>
              </DataSection>
            </Panel>
          </PokemonContainer>
        ) : (
          <div>
            <p>Loading Data...</p>
          </div>
        )}
      </>
    );
}

const PokemonNumber = styled.div`
  //margin: 3rem 0rem 3rem 0rem;
  h2 {
    opacity: 0.4;
    font-size: 3rem;
  }
`;

const PokemonName = styled.div`
    text-transform: capitalize;
    text-align: center;
    h2{
        font-size: 3rem;
    }
`;

const Abilities = styled.div`
    h3{
      margin-bottom: .5rem;
    }
`;

const PokemonImage = styled.div`

`;

const PokemonContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  padding-left: 16rem;
  padding-right: 16rem;
`;

const Panel = styled.div`
  padding: 2rem 3.5rem;
  position: relative;
`;

const Detail = styled.div`
  margin: 0.8rem 0rem 0.8rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  text-transform: capitalize;

  h3 {
    font-size: 1.1rem;
    color: #5a5a5a;
  }
`;

const DataSection = styled.div`
  margin: 0.5rem 0rem 2.5rem 0rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

export default PokemonBio;

