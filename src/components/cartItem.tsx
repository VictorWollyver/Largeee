'use client'

import React from 'react'
import Image from 'next/image'

type Props = {
  src: string;
  name: string;
  price: number;
  amount: number
}

const CartItem = ({src, name, price, amount}: Props) => {
  
  return (
    <div key={name} className='mb-10 container-cart'>
      <Image src={'/' + src} alt='product image' width={300} height={0} className='rounded-xl cursor-pointer self-center image-cart'/>
      <div className='grid grid-cols-1'>
        <h3 className='text-primary font-medium text-2xl'>{name}</h3>
        <div className='self-end flex gap-10'>
          <p className='text-xl'>Amount: {amount}</p>
          <button className='text-contrastLow'>Excluir</button>
        </div>
      </div>
      <p className='justify-self-end'>R$ {price}</p>
    </div>
  )
}

export default CartItem