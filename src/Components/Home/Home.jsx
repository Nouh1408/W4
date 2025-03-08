import React,{useState, useEffect} from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import ProductCard from '../ProductCard/ProductCard'



export default function Home() {

  const [products, setProducts] = useState([])
async function getProducts(){
 const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
 setProducts(data.data)
}
useEffect(() => {
getProducts()
}, [])

  return (
    <div className='w-3/4 mx-auto'>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {
        products.map((p)=><ProductCard key={p.id} product={p}/>)
        }
      </div>
    
    
    </div>
  )
}
