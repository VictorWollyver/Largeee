import React from "react";
import ProductItem from "./productItem";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl text-center mb-8 font-bold">Featured Products</h2>
      <div className="grid grid-cols-2 grid-rows-1 gap-8">
        <ProductItem url='http://localhost:3001/products/featured' />
      </div>
    </section>
  );
};

export default FeaturedProducts;
