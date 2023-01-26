import React from 'react'
import Link from 'next/link'

const CheckoutSuccess = () => {
  return (
    <section className='grid place-content-center h-[100vh]'>
      <h2 className='font-black text-primary text-5xl'>Thank you for shopping at largeee!</h2>
      <Link href={'/'} className='font-bold mt-10 text-2xl hover:text-primary transition text-center'>Back To Products</Link>
    </section>
  )
}

export default CheckoutSuccess