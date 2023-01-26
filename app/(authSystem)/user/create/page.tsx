'use client'

import React from 'react'
import Link from 'next/link'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Props = {}

const Create = (props: Props) => {
  const router = useRouter()
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ email, setEmail ] = React.useState('')

  const {mutate, isError, error, isLoading} = useMutation<Authentication, Error, UserData>({mutationFn: createUser, onSuccess(data) {
    window.localStorage.token = data.token
    router.push('/')
  },})

  async function createUser(userData: UserData){
    try {
      const response = await axios.post('http://localhost:3001/user/create', {
        username: userData.username,
        email: userData.email,
        password: userData.password
      })
      return response.data

    } catch(err: any) {
      throw new Error(err.response.data)
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    mutate({username, password, email})
  }

  return (
    <section className='grid place-content-center h-[100vh]'>
      <h2 className='font-semibold text-6xl'>Create your Largee account</h2>
      <p className='text-contrastLow mt-1 mb-4 text-xl'>Create your account and be part of the fastest growing style today!</p>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input type="text" minLength={4} value={username} onChange={({currentTarget}) => setUsername(currentTarget.value) } required placeholder='Username' className='rounded-xl p-3 bg-transparent border-2 placeholder:text-contrastLow w-[100%]'/>
        </div>

        <div className='mb-4'>
          <input type="password" minLength={8} value={password} onChange={({currentTarget}) => setPassword(currentTarget.value) } required placeholder='Password' className='rounded-xl p-3 bg-transparent border-2 placeholder:text-contrastLow w-[100%]'/>
        </div>

        <div className='mb-4'>
          <input type="email" required value={email} onChange={({currentTarget}) => setEmail(currentTarget.value) } placeholder='Email' className='rounded-xl p-3 bg-transparent border-2 placeholder:text-contrastLow w-[100%]'/>
        </div>

        <div className='mt-8'>
          { isLoading ? <button disabled className='bg-primary px-6 py-2 rounded-xl text-sobreTom font-extrabold text-2xl mr-8 hover:brightness-95'>Loggingin...</button> : <button className='bg-primary px-6 py-2 rounded-xl text-sobreTom font-extrabold text-2xl mr-8 hover:brightness-95'>Create</button>}
          <Link href={'/user/login'} className='text-primary'>Already have account?</Link>
        </div>
          {isError ? <p className='mt-2'>{error.message}</p> : <p></p>}
      </form>
    </section>
  )
}

export default Create