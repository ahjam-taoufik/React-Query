import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuperHeroes } from "../Hooks/useSuperHeroes";

export const RQSuperHeroesPage = () => {

//=========start=====ADD================================
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

 const { mutate: addHero } = useAddSuperHeroData()
  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }
//=========end=======ADD===============================

  const onSuccess = (data) => {
    console.log("receve data successfuly", data);
  };

  const onError = (error) => {
    console.log("error on receve data", error);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroes(
    onSuccess,
    onError
  );

  //console.log(isLoading, isFetching);

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
{/* ===========start=====ADD================= */}
<div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
{/* ===========end====ADD==================== */}


      {data?.data.map((d) => {
        return <div key={d.id}>
                 <Link to={`/rq/${d.id}`}> {d.name}</Link> 
               </div>;
      })}
    </>
  );
};
