import React from "react";
import product_img from "@/images/products/product01.jpg";

const Products = () => {
  return (
    <div className="flex bg-white w-full justify-center" id="products">
      <div className="flex flex-col container py-32 justify-center items-center">
        <h1 className="text-5xl mb-4">Produkty</h1>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center my-16">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={product_img.src} alt="product" width={300} height={341} />
            <p>Aflux krem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
