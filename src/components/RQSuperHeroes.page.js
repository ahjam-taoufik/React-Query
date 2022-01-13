import { useSuperHeroes } from "../Hooks/useSuperHeroes";




export const RQSuperHeroesPage = () => {

const onSuccess=(data)=>{
    console.log('receve data successfuly',data);
}    


const onError=(error)=>{
    console.log('error on receve data',error);
}    



  const { isLoading, data, isError, error, isFetching } = useSuperHeroes(onSuccess,onError)

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
