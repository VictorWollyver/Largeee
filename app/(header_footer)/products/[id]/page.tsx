import React from "react";
import Image from "next/image";
import Comments from "../../../../src/components/comments";
import ButtonAddCart from "../../../../src/components/buttonAddCart";
import ButtonBuyProduct from "../../../../src/components/buttonBuyProduct";
import api from "../../../../src/api/axiosConfig";
import FormSizeProduct from "../../../../src/components/formSizeProduct";

const Product = async ({ params }: { params: { id: string } }) => {
  const { color, illustration, name, price, src, tissue, _id } = await getProductByID(params.id);

  async function getProductByID(id: string): Promise<Product> {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
      
    } catch (error: any) {
      throw new Error(error.response.data)
    }

  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:grid-rows-[500px] grid-rows-[200px] product-id mt-20 text-2xl">
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
        <FormSizeProduct />
        <div className="flex gap-5 sm:mt-0 mt-8">
          {/* @ts-expect-error Server Component */}
          <ButtonAddCart id={params.id}/>
          <ButtonBuyProduct listProducts={[{name, price, amount: 1}]}/>
        </div>
      </div>
      <Comments id={_id} />
    </div>
  );
};

export default Product;
