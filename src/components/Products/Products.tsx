import React from "react";
import product_img from "@/images/products/product01.jpg";

const Products = () => {
  const ProductsItemsList = [
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
    },
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
    },
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
    },
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
    },
  ];

  return (
    <div className="flex bg-white w-full justify-center" id="products">
      <div className="flex flex-col container py-32 justify-center items-center">
        <h1 className="text-5xl mb-4">Produkty</h1>
        <div
          className="flex flex-row flex-wrap gap-10 justify-center items-center"
          data-aos="fade-up"
        >
          {ProductsItemsList.map((ProductsListItem) => (
            <div className="flex flex-col justify-center items-center my-16">
              <img
                src={ProductsListItem.source}
                alt={ProductsListItem.alt_text}
                width={ProductsListItem.width}
                height={ProductsListItem.height}
              />
              <p>{ProductsListItem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
