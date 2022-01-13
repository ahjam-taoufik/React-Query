import { useQuery } from "react-query";
import axios from "axios";


const fetch = () => {
    return axios.get("http://localhost:4000/superheroes");
  };


export  const useSuperHeroes = (onSuccess,onError) => {
    
   return useQuery("use",fetch,
    {
        // onError:onError ,
        // onSuccess:onSuccess,
     });
}


