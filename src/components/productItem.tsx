import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const ProductItem = async ({ url }: { url: string })  => {

  async function getProducts(url: string): Promise<Product[]> {
    const response = await axios.get(url)

    return response.data
  }
  
  const products = await getProducts(url)

  return (
    <>
      { products.map( ({name, price, src, _id}, index, array) => {

        return (
          <Link href={'/products/' + _id} key={name + index} className={index == array.length - 1 ? 'cursor-pointer' : 'cursor-pointer'}>
            <Image className='rounded-lg image-product' src={'/' + src} alt='product' width={450} height={450}/>
            <h3 className='text-right font-semibold text-2xl mt-1 text-primary'>{name}</h3>
            <p className='text-right text-contrastLow font-light text-lg'>R$ {price}</p>
          </Link>
        )
      } ) }
    </>
  )
}

export default ProductItem
