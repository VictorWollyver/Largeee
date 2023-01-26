'use client'

import React from 'react'
import axios from 'axios'

interface ProductToBuy {
  name: string
  price: number
  amount: number
}

interface props {
  listProducts: ProductToBuy[]
}

const ButtonBuyProduct = ({ listProducts } : props) => {
  async function buyProduct() {
    const response = await axios.post('http://localhost:3001/payments/create-checkout-session', {listProducts})
    if(response.status) {
      window.location.href = response.data
    }
  }

  return (
      <button className="text-sobreTom button-product comprar hover:brightness-90 w-min" onClick={buyProduct}>
        Checkout
      </button>
  )
}

export default ButtonBuyProduct