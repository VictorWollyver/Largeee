'use client'

import React from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [ password, setPassword ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const {error, isError, isLoading, mutate} = useMutation<Authentication, Error, UserDataLogin>({mutationFn: loginUser, 
  onSuccess(data) {
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('auth', data.auth.toString())
    router.push('/')
  },})

  async function loginUser(userData: UserDataLogin) {
    try{
      const response = await axios.post('http://localhost:3001/user/login', {
        email: userData.email,
        password: userData.password
      })
      return response.data

    } catch(err: any) {
      throw new Error(err.response.data.message)
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    mutate({password, email})
  }
  
  return (
    <section className='grid place-content-center h-[100vh]'>
      <h2 className='font-semibold text-6xl'>Login your Largeee account</h2>
      <p className='text-contrastLow mt-1 mb-4 text-xl'>Sign in to your account!</p>

      <form onSubmit={handleSubmit}>

        <div className='mb-4'>
          <input type="email" required value={email} onChange={({currentTarget}) => setEmail(currentTarget.value) } placeholder='Email' className='rounded-lg p-3 bg-transparent border-2 placeholder:text-contrastLow w-[100%]'/>
        </div>

        <div className='mb-4'>
          <input type="password" minLength={8} value={password} onChange={({currentTarget}) => setPassword(currentTarget.value) } required placeholder='Password' className='rounded-lg p-3 bg-transparent border-2 placeholder:text-contrastLow w-[100%]'/>
        </div>

        <div className='mt-8'>
          { isLoading ? <button disabled className='bg-primary px-6 py-2 rounded-lg text-sobreTom font-extrabold text-2xl mr-8 hover:brightness-95'>Loggingin...</button> : <button className='bg-primary px-6 py-2 rounded-lg text-sobreTom font-extrabold text-2xl mr-8 hover:brightness-95'>Login</button>}
          <Link href={'/user/create'} className='text-primary'>Dont have account?</Link>
        </div>
          {isError ? <p className='mt-2 font-semibold'>{error.message}</p> : <p></p>}
      </form>
    </section>
  )
}

export default Login