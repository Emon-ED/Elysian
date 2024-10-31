import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import ContextApi from './Routes/ContextApi.jsx';



createRoot(document.getElementById('root')).render(
 
  <ContextApi>
     <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
  </ContextApi>
  ,
)
