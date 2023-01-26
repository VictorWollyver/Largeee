'use client'

import React, { use } from 'react'
import Image from 'next/image'
import cart from '../../assets/cart.svg'
import { useMutation } from 'react-query'
import axios from 'axios'

const ButtonAddCart = ({ id }: { id: string }) => {
  const {mutate} = useMutation<{message: string}, Error>({mutationFn:addProductToCart , 
  onSuccess() {
    alert('Adicionado com sucesso')
  }, onError(error) {
    alert(error)
  },})

  async function addProductToCart() {
    try {
      const token = window.localStorage.getItem('token')
      const response = await axios.post(`http://localhost:3001/user/addProductCart/${id}`, null, {headers: {Authorization: 'Bearer ' + token}})
      return response.data
    } catch(err: any) {
      throw new Error(err.response.data.message)
    }
  }

  return (
    <button onClick={() => mutate()} className="text-sobreTom button-product hover:brightness-90">
      <Image src={cart} alt="cart" />
    </button>
  )
}

export default ButtonAddCart