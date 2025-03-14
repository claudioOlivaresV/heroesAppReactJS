import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp'
import {
  BrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
