import GlobalStyles from "./components/GlobalStyles";
import PokemonDetail from "./components/PokemonDetails";
import Home from "./pages/Home";
import PokemonDetails from "./components/PokemonDetails";
import Navigation from "./components/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div className="App">
        <GlobalStyles />
        <Navigation />
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="pokemons/:id" element={<PokemonDetails />} />
        </Routes>
    </div>
  );
}

export default App;
