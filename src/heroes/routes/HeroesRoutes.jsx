import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../shared/NavBar"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { Hero } from "../pages/Hero"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
        <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <Routes>
            <Route path="/marvel" element={<MarvelPage />} />
            <Route path="/dc" element={<DcPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/hero/:id" element={<Hero />} />
            <Route path="/*" element={<Navigate to="marvel" />} />
      
            
        </Routes>

        </div>
    </>
  )
}
