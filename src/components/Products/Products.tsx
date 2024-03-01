import React from "react";
import product_img from "@/images/products/product01.jpg";

import "@/components/Products/products.scss";

const Products = () => {
  const ProductsItemsList = [
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
    },
    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
    },

    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
    },

    {
      source: product_img.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
    },
  ];

  return (
    <div className="flex bg-white w-full justify-center" id="products">
      <div className="flex flex-col container py-32 justify-center items-center">
        <h1 className="text-5xl mb-4">Produkty</h1>
        <div
          className="products-wrapper flex flex-col flex-wrap gap-10 justify-center items-center"
          data-aos="fade-up"
        >
          {ProductsItemsList.map((ProductsListItem) => (
            <div className="products-wrapper__slot flex flex-row justify-center items-center my-16">
              <div className="flex flex-col">
                <img
                  className="me-10"
                  src={ProductsListItem.source}
                  alt={ProductsListItem.alt_text}
                  width={ProductsListItem.width}
                  height={ProductsListItem.height}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xl mb-4 font-bold">
                  {ProductsListItem.text}
                </p>
                <p className="text-sm w-[30vw]">
                  {ProductsListItem.text_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
