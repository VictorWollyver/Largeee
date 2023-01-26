'use client'

import React from 'react'

interface Accordion {
  title: string
  answer: string
}

const questionsData: Accordion[] = [
  {
    title: 'Our purpose',
    answer: 'Nosso proposito é comercializar roupas unissex focadas no estilo streetwear'
  },
  {
    title: 'Payments',
    answer: 'Nossos pagamentos podem ser feitos no cartão ou dinheiro'
  },
  {
    title: 'Our products',
    answer: 'Nosso proposito é comercializar roupas unissex focadas no estilo streetwear'
  },
  {
    title: 'Jobs',
    answer: 'Nosso proposito é comercializar roupas unissex focadas no estilo streetwear'
  },
  {
    title: 'Delivery',
    answer: 'Nosso proposito é comercializar roupas unissex focadas no estilo streetwear'
  },
]

const About = () => {
  const [click, setClick] = React.useState<null | number>()

  function toggle(index: number) {
    if(index == click) {
      setClick(null)
    } else {
      setClick(index)
    }
  }

  return (
    <section className='mt-20'>
      <h2 className='text-5xl mb-4 text-primary'>About Us</h2>
      <ul className='list-disc'>
        {questionsData.map(({ title, answer }, index) => {
          return (
            <li key={title} className='ml-4 mb-4 cursor-pointer' onClick={() => toggle(index)}>
              <h3 className='text-xl'>{title}</h3>
              <p className={click == index ? 'accordion-animate text-contrastLow font-light' : 'hidden'}>{answer}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default About