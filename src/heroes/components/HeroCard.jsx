import heroImage2 from "../../assets/heroes/dc-black.jpg";
import { useNavigate } from "react-router-dom"
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
const url = `/src/assets/heroes/${id}.jpg`;
// const url = `/assets/heroes/${id}.jpg`;


const navigate = useNavigate()
 const navegatTo = (heroId) =>  {
    navigate(`/hero/${heroId}`)
 }
    
  return (
    <>
        <div  className="group relative cursor-pointer" onClick={() => navegatTo(id)}>
              <img
                alt={superhero}
                src={url}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {first_appearance}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{alter_ego}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{superhero}</p>
              </div>
        </div>
    </>
  )
}
