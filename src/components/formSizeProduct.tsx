"use client";

import React from "react";

type Sizes = 'M' | 'G' | 'GG' | 'LG'

const FormSizeProduct = () => {
  const [size, setSize] = React.useState<Sizes>('M')

  function handleChange(event: any) {
    setSize(event.target.value)
  }

  return (
    <form action="" className="mt-1">
      <h3 className="mb-2">Size:</h3>

      <nav>
        <label htmlFor="M" className={`mr-4 border-2 rounded-lg border-black cursor-pointer p-1 inline-block w-14 text-center hover:border-primary ${size === "M" ? 'border-primary' : ''}`}>
          M
          <input type="radio" value='M' id="M" checked={size === 'M'} onChange={handleChange} className="hidden"/>
        </label>
  
        <label htmlFor="G" className={`mr-4 border-2 rounded-lg border-black cursor-pointer p-1 inline-block w-14 text-center hover:border-primary ${size === "G" ? 'border-primary' : ''}`} >
          <input type="radio" value='G' id="G" checked={size === 'G'} onChange={handleChange}  className="hidden"/>
          G
        </label>

        <label htmlFor="GG" className={`mr-4 border-2 rounded-lg border-black cursor-pointer p-1 inline-block w-14 text-center hover:border-primary ${size === "GG" ? 'border-primary' : ''}`}>
          <input type="radio" value='GG' id="GG" checked={size === 'GG'} onChange={handleChange}  className="hidden"/>
          GG
        </label>

        <label htmlFor="LG" className={`mr-4 border-2 rounded-lg border-black cursor-pointer p-1 inline-block w-14 text-center hover:border-primary ${size === "LG" ? 'border-primary' : ''}`} >
          <input type="radio" value='LG' id="LG" checked={size === 'LG'} onChange={handleChange}  className="hidden"/>
          LG
        </label>
      </nav>

    </form>
  );
};

export default FormSizeProduct;
