import axios from "axios";
import { useQuery } from "react-query";

const fetch = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching,refetch } = useQuery(
    "use",
    fetch,
     { 
       enabled:false // step one :Disable refech automatic when you want 
                     // to useQuery on click

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
       <button onClick={refetch}>fetch</button> 
      <h3>your data</h3>
      {data?.data.map((d) => {
        return <h4 key={d.id}>{d.name}</h4>;
      })}
    </>
  );
};
