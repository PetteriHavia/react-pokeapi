const base_url = `https://pokeapi.co/api/v2/`;


//API URLS

//Get Random Offset
const getRandomOffset = () => {
    const randomOffset = Math.floor(Math.random() * 1281);
    return randomOffset;
}

const Offset = getRandomOffset();

//Get 10 pokemons with random offset
export const randomPokemonURL = () => `${base_url}pokemon/?offset=${Offset}&limit=10`;
//Pokemon Generations for dropdown
export const generationURL = () => `${base_url}generation/`;
//Single Generation
export const selectedGenerationURL = (id) => `${base_url}generation/${id}`;
//Pokemon
export const pokemonURL = () => `${base_url}pokemon/?offset=0&limit=6`;
//Search Pokemon by name
export const searchURL = (search) => `${base_url}pokemon/${search}`;
