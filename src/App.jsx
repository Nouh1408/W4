import './App.css'
import {createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'

function App() {
  const router = createHashRouter([
    {path:"",element:<Layout/>,children:[
      {index:true, element:<Home/>},
      {path:"about",element:<About/>},
    ]}
  ])

  return (
    <>
    <RouterProvider router={router}/>  
   </>
  )
}

export default App
