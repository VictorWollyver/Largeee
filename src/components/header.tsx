'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../assets/LArgeee-Logo 1.svg'
import account from '../../assets/Vector.svg'
import { useQuery } from 'react-query'
import Link from 'next/link'
import api from '../api/axiosConfig'


const Header = () => {
  const { data, isSuccess } = useQuery('getUser', getUser)
  const token = window.localStorage.getItem('token')

  async function getUser() {
    if(token) {
      try {
        const response = await api.get('/user', {headers: {Authorization: 'Bearer ' + token}})
        return response.data

      } catch(err: any) {
        throw new Error(err.response.data)
      }
    }
  }

  return (
    <header className='flex items-center justify-between'>
      <Link href={'/'}>
        <Image alt='Largeee' src={logo} width={200} height={200} priority />
      </Link>
      <button className='flex items-center '>
        <Image className='mr-3' alt='account' src={account} width='16' height='16' />
        { token && isSuccess  ? <Link href={`/user/cart`}>{data.username}</Link> : <Link href="/user/create">Account</Link> }
      </button>
    </header>
  )
}

export default Header