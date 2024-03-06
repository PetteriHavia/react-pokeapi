import GlobalStyles from "./components/GlobalStyles";
import PokemonDetail from "./components/PokemonDetails";
import Home from "./pages/Home";
import PokemonDetails from "./components/PokemonDetails";
import Navigation from "./components/Navigation";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="pokemon/:singleId" element={<PokemonDetails />} />
        </Routes>
    </div>
  );
}

export default App;
