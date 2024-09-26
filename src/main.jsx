import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Welcome from './pages/Welcome.jsx'
import Rockpaperscissors from './pages/Rockpaperscissors.jsx'
import Menu from './pages/Menu.jsx'
import './assets/index.css'
import {
  MemoryRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { FormProvider } from './pages/FormContext.jsx'; // Importer le contexte

const router = createBrowserRouter([
  {
    path: '/tictactoe',
    element:<App/>
  },
  {
    path: '/',
    element: <Welcome/>,
    // children:[
    //   {
    //     path:'/ayo',
    //     element: <ayo/>,
    //   }
    // ]
  },
  {
    path: '/rps',
    element:<Rockpaperscissors/>
  },
  {
    path: '/menu',
    element:<Menu/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      < RouterProvider router={router}/>
    </FormProvider>
  </React.StrictMode>,
)
