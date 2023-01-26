'use client'

import React from 'react'
import CartItem from '../../../../src/components/cartItem'
import { useQuery } from 'react-query'
import axios from 'axios'
import ButtonBuyProduct from '../../../../src/components/buttonBuyProduct'

async function getCart() {
  try {
    const response = await axios.get('http://localhost:3001/user/cart', { headers: {"Authorization": "Bearer " + window.localStorage.token } })
    return response.data
  } catch(err: any) {
    throw new Error(err.response.data)
  }
}

const Page = () => {
  const { data, isSuccess, isError, error } = useQuery<ProductCart[], Error>('getCart', getCart)

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
        <p className='text-2xl'>Não possui itens no carrinho</p>
      </section>
    )
  }

  if(isSuccess)
  return (
    <section className='mt-20'>
      {data?.map(({src, name, price, amount}, index) => <CartItem key={index} src={src} name={name} price={price} amount={amount}/>)}
      <div className=''>
        <ButtonBuyProduct listProducts={data}/>
        <p className='text-2xl mt-4'>Total ({itemsAmount}): <span className='text-primary '>R$ {totalValue}</span></p>
      </div>
    </section>
  )
}

export default Page