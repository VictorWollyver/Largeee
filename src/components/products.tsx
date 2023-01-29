import React from 'react'
import ProductItem from './productItem'

type Props = {}

const Products = (props: Props) => {
  return (
    <section className='mt-20'>
      <h2 className='text-3xl text-center mb-8 font-bold'>Products</h2>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 products'>
        {/* @ts-expect-error Server Component */}
        <ProductItem url='http://localhost:3001/products' />
      </div>
    </section>
  )
}

export default Products