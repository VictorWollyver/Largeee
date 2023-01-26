'use client'

import React from 'react'

interface ICommentItemProps {
  comments: CommentProduct[] | undefined,
  limit: boolean
}


const CommentItem = ({comments, limit} : ICommentItemProps) => {
  const commentsFiltred = limit ? comments?.slice(0, 5) : comments
 
  return (
    <>
      {commentsFiltred?.map(({author, comment}, index) =>{
        return (
          <div key={index} className='mb-3'> 
            <h2 className='mb-1'>{author}</h2> 
            <p className='text-contrastLow font-light text-xl'>{comment}</p>
          </div>
        )
       })}
    </>
  )
}

export default CommentItem