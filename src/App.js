import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import NavBar from "./NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();
function App() {

  return (
    
  <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/super" element={<SuperHeroesPage />}></Route>
        <Route path="/rq" element={<RQSuperHeroesPage />}></Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
   
  );
}

export default App;
