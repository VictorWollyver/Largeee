'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../assets/LArgeee-Logo 1.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()
  function handleLogOut() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('auth')
    router.push('/user/login')
  }

  return (
    <footer className='grid h-60 gap-5 text-contrastLow footer-grid mt-20' >
      <div className='justify-self-center'>
        <div>
          <Image alt='logo' src={logo} width={200} height={200} priority />
          <p className='font-normal text-lg'>YOUR BAGGY CLOTHES STYLE IS HERE</p>
        </div>
        <p className='mb-5 text-center mt-40'>Developed by <span className='text-primary'>Victor Wollyver</span></p>
      </div>

      <div className='detail'></div>

      <div>
        <ul >
          <li className='mb-5'> <Link href={'/about'} >About us</Link> </li>
          <li className='mb-5'> <Link href="/contact">Contact Us</Link>  </li>
          <li> <Link href="/jobs">Work with Us</Link> </li>
        </ul>
      </div>

      <div className='detail'></div>

      <div>
        <ul>
          <li className='mb-5'> <button onClick={handleLogOut}>LogOut</button> </li>
          <li> <Link href={'/user/cart'}>Cart</Link> </li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer