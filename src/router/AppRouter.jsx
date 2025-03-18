import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { DcPage } from "../heroes/pages/DcPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { NavBar } from "../shared/NavBar"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
    {/* <NavBar/> */}
    <Routes>
      {/* <Route path="/marvel" element={<MarvelPage />} />
      <Route path="/dc" element={<DcPage />} /> */}
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      <Route path="/*" element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      } />

      
    </Routes>
    </>
  )
}
