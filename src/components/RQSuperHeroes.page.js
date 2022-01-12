import axios from "axios";
import { useQuery } from "react-query";

const fetch = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {

const onSuccess=()=>{
    console.log('receve data successfuly');
}    


const onError=()=>{
    console.log('error on receve data');
}    



  const { isLoading, data, isError, error, isFetching } = useQuery(
    "use",
    fetch,
     { 
       onError:onError ,
       onSuccess:onSuccess,

     }
  );

  console.log(isLoading,isFetching);

  if (isLoading) {
    return <h3>Loading ....</h3>;
  }
  if (isFetching) {
    return <h3>Loading ....</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
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
