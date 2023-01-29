'use client'

import React, { FormEvent } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'

type Props = {
  id: string
  refetch: any
}

const FormAddComment = ({ id, refetch }: Props) => { 
  const [comment, setComment] = React.useState('')

  const {mutate, isLoading}= useMutation<CommentProduct, Error, string>({mutationFn: postComment, 
  onSuccess() {
    alert('comment add')
    refetch()
  },}) 

  async function postComment(comment: string) {
    try {
      const token = window.localStorage.token
      const response = await axios.post(`http://localhost:3001/products/${id}/comments`, {comment}, {headers: {Authorization: 'Bearer ' + token}})
      return response.data
    } catch (err: any) {
      throw new Error(err.response.data.message)
    }
  }

  function onPostComment(event: FormEvent) {
    event.preventDefault()
    mutate(comment)
  }
 
  return (
    <form action="" className='mt-8' onSubmit={onPostComment}>
      <input required placeholder='Add a comment' onChange={({target}) => setComment(target.value) } value={comment} className='bg-transparent min-w-[50%] text-xl border-2 rounded-xl p-2 border-black outline-none placeholder:text-contrastLow' type="text" />
      { isLoading ? <button disabled className='text-sobreTom hover:brightness-90 postButton text-2xl cursor-wait'>Posting...</button> : <button className='text-sobreTom hover:brightness-90 postButton text-2xl'>Post</button> }
    </form>
  )
}

export default FormAddComment