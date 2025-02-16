import './App.css'
import {createBrowserRouter, /* createHashRouter */ RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'
import NotFound from './Components/NotFound/NotFound'
import Brands from './Components/Brands/Brands'
import CArt from './Components/CArt/CArt'


function App() {
  const router = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true, element:<Home/>},
      {path:"about",element:<About/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
      {path:"categories",element:<Categories/>},
      {path:"cart",element:<CArt/>},
      {path:"brands",element:<Brands/>},
      {path:"products",element:<Products/>},
      {path:"*", element:<NotFound/>}
    ]}
  ])
  

  return (
    <>
    <RouterProvider router={router}/>  
   </>
  )
}

export default App
