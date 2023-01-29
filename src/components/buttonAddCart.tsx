'use client'

import React from 'react'
import Image from 'next/image'
import cart from '../../assets/cart.svg'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ButtonAddCart = ({ id }: { id: string }) => {
  const router = useRouter()
  const auth = window.localStorage.getItem('auth')
  const {mutate} = useMutation<{message: string}, Error>({mutationFn:addProductToCart , 
  onSuccess() {
    router.push('/user/cart')
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

  

  if(auth){
    return (
      <button onClick={() => mutate()} className="text-sobreTom button-product hover:brightness-90 min-w-max h-[80px] self-end">
        <Image src={cart} alt="cart" width={30} height={30}   />
      </button>
    )
  }

  if(!auth) {
    return (
      <></>
    )
  }
}

export default ButtonAddCart