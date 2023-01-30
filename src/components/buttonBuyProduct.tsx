'use client'

import React from 'react'
import api from '../api/axiosConfig'
import { useMutation } from 'react-query'

interface ProductToBuy {
  name: string
  price: number
  amount: number
}

interface props {
  listProducts: ProductToBuy[]
}

const ButtonBuyProduct = ({ listProducts } : props) => {
  const { mutate, isLoading } = useMutation<string, Error>({mutationFn: buyProduct, 
  onSuccess(data) {
    window.location.href = data
  },})
  async function buyProduct() {
    try {
      const response = await api.post('/payments/create-checkout-session', {listProducts})
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data)
    }
  }

  if(isLoading) {
    return (
      <button disabled className="text-sobreTom button-product hover:brightness-90 cursor-wait w-[100%] self-end h-[80px]">
        Processing...
      </button>
    )
  }
  return (
      <button className="text-sobreTom button-product hover:brightness-90 w-[100%] self-end h-[80px]" onClick={() => mutate() }>
        Checkout
      </button>
  )
}

export default ButtonBuyProduct