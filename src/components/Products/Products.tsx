import React from "react";
import product_img01 from "@/images/products/product01.jpg";
import product_img02 from "@/images/products/product02.jpg";
import product_img03 from "@/images/products/product03.jpg";
import product_img04 from "@/images/products/product04.jpg";

import "@/components/Products/products.scss";

const Products = () => {
  const ProductsItemsList = [
    {
      source: product_img01.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
      price: "49,99",
    },
    {
      source: product_img02.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
      price: "29,99",
    },
    {
      source: product_img03.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
      price: "89,99",
    },
    {
      source: product_img04.src,
      width: 300,
      height: 341,
      text: "Aflux krem",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
      price: "104,99",
    },
  ];

  return (
    <div className="flex bg-white w-full justify-center" id="products">
      <div className="flex flex-col container py-32 justify-center items-center">
        <h1 className="text-5xl mb-4">Produkty</h1>
        <div className="products-wrapper flex flex-col flex-wrap gap-10 justify-center items-center">
          {ProductsItemsList.map((ProductsListItem) => (
            <div
              className="products-wrapper__slot flex flex-row justify-center items-center my-16"
              data-aos="fade-up"
            >
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
                <p className="text-sm mb-4 w-[30vw]">
                  {ProductsListItem.text_description}
                </p>
                <p className="text-xl">
                  Cena:{" "}
                  <span className="text-2xl font-bold">
                    {ProductsListItem.price}
                  </span>{" "}
                  zł
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
