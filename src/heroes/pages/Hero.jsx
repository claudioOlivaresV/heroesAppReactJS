import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById"
import { useMemo } from "react";

export const Hero = () => {
    const {id } = useParams()
    console.log(id);
    const hero = useMemo(()=> getHeroById(id), [id]) 
    const navigate = useNavigate()
    if(!hero) {

        return <Navigate to={'marvel'} />
    }
    console.log(hero);
    const url = `/src/assets/heroes/${id}.jpg`;
    
    const back =  () => {
        navigate(-1)

    }
    
  return (
    <>
    <div className="bg-white">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 className="sr-only">Products</h2>

    {/* Contenedor de los productos */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Producto 1 */}
      <div className="bg-gray-100 rounded-lg">
        <a href="#" className="block">
        <img
          alt={id}
          src={url}
          className="w-full h-auto rounded-md bg-gray-200 object-cover group-hover:opacity-75"
        />

        </a>
      </div>

      <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">{hero.superhero}</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">{hero.alter_ego}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Publisher</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{hero.publisher}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Firs Appearance</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{hero.first_appearance}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Characters</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{hero.characters}</dd>
          </div>
     
        </dl>
        <button
                onClick={back}
                className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Volver
              </button>
      </div>
    </div>
    
    </div>
  </div>
</div>


    </>
  )
}
