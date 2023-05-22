import styled from "styled-components";

const PokemonBio = ({pokemon, type, species}) => {

    //Check for null fields
    const validateField = (field) => {
      return field !== null ? field : "No Data";
    }

    //Get the english version of the flavor text
    const getFlavorText = (flavorTextArray) => {
      const englishText = flavorTextArray.find(
        (item) => item.language.name === "en"
      );
      return englishText ? englishText.flavor_text : "This information has not been updated yet";
    }

    //Validate species
    const getSpeciesGenera = (generaArray) => {
      const genera = generaArray.find(
        (item) => item.language.name === "en"
      );
      return genera ? genera.genus : "No Data";
    }

    const getHabitat = (field) => {
      if(field === null || field.name === undefined) {
        return "No Data";
      }
      return field.name;
    }

    const getHeight = (height) => {
      const cm = (height * 10);
      const meter = (cm / 100).toFixed(1);
      return meter;
    }

    return (
      <>
        {species ? (
          <PokemonContainer>
            <ImagePanel className={`${type}`}>
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
            </ImagePanel>
            <Panel>
              <DataSection>
                <h2>Biography</h2>
                <p>{getFlavorText(species.flavor_text_entries)}</p>
                <Detail>
                  <h3>Species:</h3>
                  <h3>{getSpeciesGenera(species.genera)}</h3>
                </Detail>
                <Detail>
                  <h3>Generation:</h3>
                  <h3>{validateField(species.generation.name)}</h3>
                </Detail>
                <Detail>
                  <h3>Habitat:</h3>
                  <h3>{getHabitat(species?.habitat)}</h3>
                </Detail>
                <Detail>
                  <h3>Height:</h3>
                  <h3>{getHeight(pokemon.height)} m</h3>
                </Detail>
                <Detail>
                  <h3>Weight:</h3>
                  <h3>{(pokemon.weight * 0.1).toFixed(1)} kg</h3>
                </Detail>
                <Detail>
                  <h3>Ablilities</h3>
                  <Abilities>
                  {pokemon.abilities.map((item, index) => (
                    <h3 key={index}>{item.ability.name}</h3>
                  ))}
                  </Abilities>
                </Detail>
              </DataSection>
              <DataSection>
                <h2>Rates</h2>
                <Detail>
                  <h3>Base EXP:</h3>
                  <h3>{validateField(pokemon.base_experience)}</h3>
                </Detail>
                <Detail>
                  <h3>Growth Rate:</h3>
                  <h3>{validateField(species.growth_rate.name)}</h3>
                </Detail>
                <Detail>
                  <h3>Capture Rate:</h3>
                  <h3>{validateField(species?.capture_rate)}</h3>
                </Detail>
                <Detail>
                  <h3>Base Happiness:</h3>
                  <h3>{validateField(species?.base_happiness)}</h3>
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
  img{
    width: 100%;
  }
`;

const PokemonContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 14px rgb(0,0,0, .1);
`;

const Panel = styled.div`
  padding: 2rem 5rem;
  width: 100%;
 
`;

const ImagePanel = styled.div`
  padding: 2rem 0rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2{
    color: white;
  }
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

