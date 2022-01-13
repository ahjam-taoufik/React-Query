
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroe } from '../Hooks/useSuperHeroe'

const RQSuperHeroePage = () => {
   
     const {heroId}=useParams()

    const {isLoading,data, isError,error}=useSuperHeroe(heroId)

    if (isLoading) {
        return <h3>Loading ....</h3>;
      }
    
      if (isError) {
        return <h3>{error.message}</h3>;
      }



    return (
        <div>
             {data?.data.name}
        </div>
    )
}


export default RQSuperHeroePage
