'use client'

import React from 'react'
import { useQuery } from 'react-query'
import CommentItem from './commentItem'
import FormAddComment from './formAddComment'
import api from '../api/axiosConfig'

type Props = { id: string}

const Comments = ({ id }: Props) => {
  const token = window.localStorage.getItem('token')
  const [limit, setLimit] = React.useState(true)
  const {data: comments, isLoading, error, isError, refetch} = useQuery<CommentProduct[], Error>('comments', getCommentsByID)

  async function getCommentsByID(): Promise<CommentProduct[]> {
    const response = await api.get(`/products/${id}/comments`)

    return response.data
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>{error.message}</div>
  }

  return (
    <div className='col-span-full'>
      <h2 className='text-primary text-3xl font-medium mb-4'>Comments:</h2>
      <CommentItem comments={comments} limit={limit}/>
      {limit ? <button onClick={() => setLimit(false)} className='text-primary'>Show More ↓</button> : <button onClick={() => setLimit(true)} className='text-primary'>Show less ↑</button>}
      { token ? <FormAddComment id={id} refetch={refetch} /> : ''}
    </div>
  )
}

export default Comments