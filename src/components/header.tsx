'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../assets/LArgeee-Logo 1.svg'
import account from '../../assets/Vector.svg'
import { useQuery } from 'react-query'
import Link from 'next/link'
import axios from 'axios'

const Header = () => {
  const { data, isSuccess} = useQuery('getUser', getUser)

  async function getUser() {
    const token = window.localStorage.getItem('token')
      const response = await axios.get('http://localhost:3001/user', {headers: {Authorization: 'Bearer ' + token}})
      if(!response.status) throw new Error('')
      return response.data
    }

  return (
    <header className='flex items-center justify-between'>
      <Link href={'/'}>
        <Image alt='Largeee' src={logo} width={200} height={200} priority />
      </Link>
      <button className='flex items-center '>
        <Image className='mr-3' alt='account' src={account} width='16' height='16' />
        { isSuccess ? <Link href={`/user/cart`}>{data.username}</Link> : <Link href="/user/create">Account</Link> }
      </button>
    </header>
  )
}

export default Header