import { useQuery,useMutation, useQueryClient } from "react-query";
//import axios from "axios";
import {request} from '../utils/axios.utils'

const fetch = () => {
  //  return axios.get("http://localhost:4000/superheroes");
  return request({ url: '/superheroes' })

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
  // return axios.post('http://localhost:4000/superheroes', hero)
   return request({ url: '/superheroes', method: 'post', data: hero })
}


export const useAddSuperHeroData = () => {
  const queryclient=useQueryClient()
  return useMutation(addSuperHero,{
    onSuccess:(data)=>{
         /** Query Invalidation Start */
        // queryclient.invalidateQueries('use')
         /** Query Invalidation Start */


         /** Handling Mutation Response Start */
         queryclient.setQueryData('use', oldQueryData => {
            return {
              ...oldQueryData,
              data: [...oldQueryData.data, data.data]
            }
          })
        /** Handling Mutation Response Start */

    }
  })
}