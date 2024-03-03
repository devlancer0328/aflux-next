import React from "react";
import PhotoAlbum, { PhotoAlbumProps } from "react-photo-album";
import product_img01 from "@/images/products/product01.jpg";
import product_img02 from "@/images/products/product02.jpg";
import product_img03 from "@/images/products/product03.jpg";
import product_img04 from "@/images/products/product04.jpg";
import product_img05 from "@/images/products/product05.jpg";
import product_img06 from "@/images/products/product06.jpg";
import product_img07 from "@/images/products/product07.jpg";
import product_img08 from "@/images/products/product08.jpg";

interface PhotoType {
  src: string;
  width: number;
  height: number;
}

const photos: PhotoType[] = [
  { src: `${product_img01.src}`, width: 400, height: 500 },
  { src: `${product_img02.src}`, width: 400, height: 500 },
  { src: `${product_img03.src}`, width: 400, height: 500 },
  { src: `${product_img04.src}`, width: 400, height: 500 },
  { src: `${product_img05.src}`, width: 400, height: 500 },
  { src: `${product_img06.src}`, width: 300, height: 500 },
  { src: `${product_img07.src}`, width: 800, height: 500 },
  { src: `${product_img08.src}`, width: 800, height: 500 },
];

const Gallery: React.FC = () => {
  const albumProps: PhotoAlbumProps<PhotoType> = {
    layout: "rows",
    photos: photos,
  };

  return (
    <div className="py-16 lg:py-32 bg-white" id="gallery">
      <h1 className="text-black text-2xl lg:text-4xl font-regular mt-8 mb-16 text-center">
        - Galeria -
      </h1>
      <div data-aos="fade-up">
        <PhotoAlbum {...albumProps} />
      </div>
    </div>
  );
};

export default Gallery;
