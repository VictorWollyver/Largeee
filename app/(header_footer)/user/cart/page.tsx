'use client'

import React from 'react'
import CartItem from '../../../../src/components/cartItem'
import { useQuery } from 'react-query'
import api from '../../../../src/api/axiosConfig'
import ButtonBuyProduct from '../../../../src/components/buttonBuyProduct'
import Link from 'next/link'



const Page = () => {
  const { data, isSuccess, isError, error, refetch } = useQuery<ProductCart[], Error>('getCart', getCart)
  async function getCart() {
    try {
      const token = window.localStorage.getItem('token')
      const response = await api.get('/user/cart', { headers: {"Authorization": "Bearer " + token } })
      return response.data
    } catch(err: any) {
      throw new Error(err.response.data)
    }
}

  const itemsAmount = data?.reduce((prev, {amount}) => {
    return prev + amount
  }, 0)

  const totalValue = data?.reduce((prev, {price, amount}) => {
    return prev + price * amount
  }, 0)


  if(isError) {
    return(
      <section className='mt-20'>
        <p className='text-2xl'>{error.message}</p>
      </section>
    )
  }

  if(isSuccess && !data?.length) {
    return (
      <section className='mt-20'>
        <p className='text-2xl'>There are no items in the cart</p>
        <p className='mt-24 text-2xl'>Come see our products to assemble your Largeee cart</p>
        <Link href={'/'} className='rounded-lg text-sobreTom bg-primary p-3 font-bold inline-block'>Go to Products</Link>
      </section>
    )
  }

  if(isSuccess)
  return (
    <section className='mt-20'>
      {data?.map(({src, name, price, amount, product_id}, index) => <CartItem key={index} src={src} name={name} price={price} amount={amount} id={product_id} refetch={refetch} />)}
      <div className=''>
        <ButtonBuyProduct listProducts={data}/>
        <p className='text-2xl mt-4'>Total ({itemsAmount}): <span className='text-primary '>R$ {totalValue}</span></p>
      </div>
    </section>
  )
}

export default Page