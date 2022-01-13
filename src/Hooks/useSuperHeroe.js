import { useQuery } from "react-query";
import axios from "axios";


const fetch = (Id) => {
    return axios.get(`http://localhost:4000/superheroes/${Id}`);
  };


export  const useSuperHeroe = (Id) => {
    
   return useQuery(["use",Id],()=> fetch(Id));
}


