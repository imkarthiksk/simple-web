import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Properties} from "./Properties.jsx";
import {Simple} from "./Simple.jsx";







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Simple name="karthik" hotel="Arbian"/>
    <Simple name="arun" hotel="Babu kada"/>

    {/* <Properties name="karthik"/>
     <Properties name="ajay"/> */}

  </StrictMode>
)
