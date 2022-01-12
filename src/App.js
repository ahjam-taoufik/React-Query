import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/super" element={<SuperHeroesPage />}></Route>
        <Route path="/rq" element={<RQSuperHeroesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
