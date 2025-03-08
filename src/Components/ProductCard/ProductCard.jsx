import React from 'react'
import style from './ProductCard.module.css'
import { FaStar } from 'react-icons/fa'

export default function ProductCard({product}) {
  return (
    <div className="card overflow-hidden group object-center">
      <img className='w-full md:h-52 object-cover' src={product.imageCover} alt="pic-1" />
      <span className='text-green-500'>{product.category.name}</span>
      <h2 className='text-large font-semibold mb-3'>{product.title.split(" ",2).join(" ")}</h2>
      <div className='flex justify-between'>
      <span>{product.price} EGP</span>
        <span>{product.ratingsAverage} <FaStar className='inline-block text-yellow-400'/></span>
      </div>
      <button type="button" class="btn-green w-full mt-2 group-hover:translate-y-0 duration-500 transition-all translate-y-20">Add Product</button>
    </div>
  )
}
