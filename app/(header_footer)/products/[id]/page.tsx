import React from "react";
import Image from "next/image";
import Comments from "../../../../src/components/comments";
import ButtonAddCart from "../../../../src/components/buttonAddCart";
import ButtonBuyProduct from "../../../../src/components/buttonBuyProduct";
import axios from "axios";

const Product = async ({ params }: { params: { id: string } }) => {
  async function getProductByID(id: string): Promise<Product> {
    const response = await axios.get(`http://localhost:3001/products/${id}`);

    return response.data;
  }

  const { color, illustration, name, price, src, tissue, _id } = await getProductByID(params.id);


  return (
    <div className="grid grid-cols-2 gap-8 grid-rows-[500px] product-id mt-20 text-2xl">
      <Image
        className="rounded-md image-cart"
        src={"/" + src}
        alt="Product Image"
        width={577}
        height={500}
        quality={75}
      />
      <div className="self-stretch grid">
        <div>
          <h2 className="text-primary font-medium text-3xl">{name}</h2>
          <p className="font-medium text-2xl mt-1">R$: {price}</p>
        </div>
        <ul className="mt-10 mb-10">
          <li>Color: {color}</li>
          <li>Illustration: {illustration ? 'yes' : 'no'}</li>
          <li>Tissue: {tissue}</li>
        </ul>
        <div>
          <h3 className="mb-2">Size:</h3>
          <button className="border-2 border-black rounded-xl w-11 h-11 mr-6 hover:text-primary">
            M
          </button>
          <button className="border-2 border-black rounded-xl w-11 h-11 mr-6 hover:text-primary">
            G
          </button>
          <button className="border-2 border-black rounded-xl w-11 h-11 mr-6 hover:text-primary">
            GG
          </button>
          <button className="border-2 border-black rounded-xl w-11 h-11 mr-6 hover:text-primary">
            LG
          </button>
        </div>
        <div className="flex gap-5">
          <ButtonAddCart id={params.id}/>
          <ButtonBuyProduct listProducts={[{name, price, amount: 1}]}/>
        </div>
      </div>
      <Comments id={_id} />
    </div>
  );
};

export default Product;
