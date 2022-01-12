import axios from "axios";
import { useQuery } from "react-query";


const fetch=()=>{
    return axios.get("http:/localhost:4000/superheroes");
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("use", fetch)
    if(isLoading){
        return <h3>Loading ....</h3>
     }
  return (
    <>
      <h3>your data</h3>
      {data?.data.map((d) => {
        return <h4 key={d.id}>{d.name}</h4>;
      })}
    </>
  );
};
