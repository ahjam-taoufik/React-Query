import { useQuery,useMutation } from "react-query";
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

//========================================================================

const addSuperHero = hero => {
   return axios.post('http://localhost:4000/superheroes', hero)
 // return request({ url: '/superheroes', method: 'post', data: hero })
}


export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero)
}