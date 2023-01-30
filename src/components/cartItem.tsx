'use client'

import React from 'react'
import Image from 'next/image'
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation, useQueryClient } from 'react-query'
import api from '../api/axiosConfig'


type Props = {
  src: string;
  name: string;
  price: number;
  amount: number
  id: string
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<ProductCart[], Error>>
}

const CartItem = ({src, name, price, amount, id, refetch}: Props) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation<null, Error>({mutationFn: removeAmount, 
  onSuccess() {
    queryClient.invalidateQueries('getCart')
  },})

  async function removeAmount() {
    try {
      const token = window.localStorage.getItem('token')
      const response = await api.delete('/user/removeProductCart/' + id, {headers: {Authorization: 'Bearer ' + token}})
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data)
    }
  }
  
  return (
    <div key={name} className='mb-10 container-cart '>
      <Image src={'/' + src} alt='product image' width={300} height={0} className='rounded-xl cursor-pointer self-center image-cart w-[100%]'/>
      <div className='grid grid-cols-1'>
        <h3 className='text-primary font-medium text-2xl'>{name}</h3>
        <div className='self-end flex gap-10'>
          <p className='text-xl'>Amount: {amount}</p>
          <button className='text-contrastLow' onClick={() => mutate()}>Excluir</button>
        </div>
      </div>
      <p className='sm:justify-self-end'>R$ {price}</p>
    </div>
  )
}

export default CartItem