# Pokémon Explorer

Pokémon Explorer is a React-based application that leverages the popular [PokeAPI](https://pokeapi.co/) to allow users to search, explore, and view detailed information about all the Pokémons. The app provides an interface to browse Pokémon by generation or search for specific ones using name.

## Tech Stack
- React
- PokeAPI
- React Router
- Styled-Components

## 🚀 Features

**Search and Explore Pokémon**
- **Search by Name**: Use the search bar to type in a Pokémon's name and view results. Search results are displayed in a grid below the search bar.  
- **Generation Selector**: Filter Pokémon using a dropdown to select any Pokémon generation. A separate grid displays all Pokémon belonging to the selected generation.

![Image Alt](https://github.com/PetteriHavia/react-pokeapi/blob/a50a6b478a8454f98926d37cb70df17179688920/src/images/readme_images/default_view.jpg)

![Image Alt](https://github.com/PetteriHavia/react-pokeapi/blob/a50a6b478a8454f98926d37cb70df17179688920/src/images/readme_images/generation_view.jpg)

**Search Result Management**
- Search results persist in a dynamic array, always adding the most recent search target as the first item while retaining previous results.

![Image Alt](https://github.com/PetteriHavia/react-pokeapi/blob/a50a6b478a8454f98926d37cb70df17179688920/src/images/readme_images/search_results_view.jpg)

**View Detailed Pokémon Information**
- Click on any Pokémon card to navigate to a **Details Page**.
- The Details Page fetches additional information using the Pokémon's ID and displays:
  - Basic information (generation, species, type, habitat, height, weight, abilities).
  - Stats (e.g., HP, Attack, Defense, Sp.Atk, Sp.Def, Speed) from min to max values.

![Image Alt](https://github.com/PetteriHavia/react-pokeapi/blob/a50a6b478a8454f98926d37cb70df17179688920/src/images/readme_images/pokemon_details_view.jpg)
