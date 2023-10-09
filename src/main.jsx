import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './Components/Home/Home';
import Beranda from './Components/Pages/Beranda';
import TentangKami from './Components/Pages/TentangKami';
import Layanan from './Components/Pages/Layanan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
       path : '/',
       element:<Home></Home>
      },
      {
        path: '/Beranda',
        element:<Beranda/>
      },
      {
        path:'/TentangKami',
        element: <TentangKami/>
      },
      {
        path:'/Layanan',
        element:<Layanan/>
      }
    ] 
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
