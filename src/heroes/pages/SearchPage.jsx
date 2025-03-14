import React from "react";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { getHeroByName } from "../../helpers/getHeroByName";

export const SearchPage = () => {

   const navigate = useNavigate();
   const location = useLocation();
   const {q = ''} = queryString.parse(location.search);
   const {seachText, onInputChange} = useForm({
    seachText: q

   })
   const heroes = getHeroByName(q)
   console.log({q});
   console.log(heroes);
   
   
   const onSearchSubmit = (event) => {
    event.preventDefault();
    if(seachText.length <= 1) return;
    navigate(`?q=${seachText}`)
   }

  return (
    <>
    <form onSubmit={onSearchSubmit}>
      <div className="lg:flex lg:items-end lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Buscar Héroe
            </label>
            <div className="mt-2.5">
              <input
                id="seachText"
                name="seachText"
                type="text"
                value={seachText}
                onChange={onInputChange}
                autoComplete="off"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Botón alineado abajo */}
        <div className="mt-5 lg:mt-0 lg:ml-4 flex items-end w-full lg:w-auto">
          <button
            type="submit"
            className=" w-full text-center inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
      {
        (q === '') 
        ? null
        :
        (heroes.length === 0 ) &&
        <div className="mt-10 border-t border-gray-200 pt-10">
          <span className="block w-full rounded-md bg-red-50 px-3 py-3 text-center text-red-700  ring-1 ring-blue-700/10 ring-inset">
          No se encontraron resultados para tu búsqueda <b>{q}</b>
        </span>
       </div>
      }
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        { 
            heroes.map(hero => (
                <HeroCard  key={hero.id} 
                  {...hero} />
            ))
        }
     </div>
    </>
  );
};
