import { useMemo } from "react";
import { getHerouesByPublisher } from "../../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> getHerouesByPublisher(publisher), [publisher]) 
    console.log(heroes);
    
  return (
    <>
     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        { 
            heroes.map(hero => (
                <HeroCard  key={hero.id} 
                  {...hero} />
            ))
        }
     </div>
    </>
  )
}
