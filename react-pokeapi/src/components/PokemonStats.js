import styled from "styled-components";

const PokemonStats = ({ pokemon, species}) => {
  //Mapping for special stats
  const statMapping = {
    "special-attack": "sp.atk",
    "special-defense": "sp.def",
  };

  //Calculate width
  const stats = pokemon.stats.map((item) => {
    let max;
    if (item.stat.name === "hp") {
      max = parseInt(item.base_stat) * 2 + 204;
    } else {
      max = ((parseInt(item.base_stat) * 2 + 99) * 1.1).toFixed(0);
    }
    return {
      name: item.stat.name,
      max: max,
      min: item.base_stat,
    };
  });

  const transformText = (statName) => {
    if (statMapping.hasOwnProperty(statName)) {
      return statMapping[statName];
    }
    return statName;
  };

  return (
    <>
      {species || pokemon ? (
        <Container>
          <Panel>
            <h2>Pokemon Stats</h2>
            <p>
              The minimum and maximum values are calculated for level 100
              Pokémon. The minimum values are determined with 0 EVs (Effort
              Values) and 0 IVs (Individual Values), while the maximum values
              are based on 252 EVs and 31 IVs.
            </p>
          </Panel>
          <Panel>
            <h3>Stats</h3>
           
              {stats.map((item) => (
                <Detail key={item.name}>
                  <h3>{transformText(item.name)}</h3>
                  <h3>{item.min}</h3>
                  <StatMeter>
                    <div style={{ width: "100%" }}>
                      <div
                        className="inner"
                        style={{
                          width: `${(item.min / (item.max - 75)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </StatMeter>
                  <h3>{item.max}</h3>
                </Detail>
              ))}
           
          </Panel>
        </Container>
      ) : (
        <div>
          <p>Loading Data...</p>
        </div>
      )}
    </>
  );
};

const Container = styled.div`
  margin: 2rem 0rem;
  display: flex;
  box-shadow: 0px 0px 14px rgb(0, 0, 0, 0.1);
`;

const Panel = styled.div`
  //padding: 2rem 5rem 0rem 0rem;
  padding: 2rem;
  width: 100%;
  p {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }
`;

const Detail = styled.div`
  margin: 0.8rem 0rem 0.8rem 0rem;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  h3 {
    font-size: 1.1rem;
    color: #5a5a5a;
  }
`;

const StatMeter = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 2 / span 2;
  width: 100%;
`;

export default PokemonStats;
