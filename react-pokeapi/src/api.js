const base_url = `https://pokeapi.co/api/v2/`;

//API URLS

//Pokemon Generations for dropdown
export const generationURL = () => `${base_url}generation/`;
//Single Generation
export const selectedGenerationURL = (id) => `${base_url}generation/${id}`;
//Pokemon
export const pokemonURL = () => `${base_url}pokemon/?offset=0&limit=9`;
//Search Pokemon by name
export const searchURL = (search) => `${base_url}pokemon/${search}`;
//Pokemon details call
//export const pokemonDetails = (id) => `${base_url}pokemon/${id}`;
