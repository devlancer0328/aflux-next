import React from "react";
import PhotoAlbum, { Photo, PhotoAlbumProps } from "react-photo-album";
import product_img from "@/images/products/product01.jpg";

interface PhotoType {
  src: string;
  width: number;
  height: number;
}

const photos: PhotoType[] = [
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
  { src: `${product_img.src}`, width: 400, height: 500 },
];

const Gallery: React.FC = () => {
  const albumProps: PhotoAlbumProps<PhotoType> = {
    layout: "masonry",
    photos: photos,
  };

  return (
    <div className="p-10 bg-white">
      <h1 className="text-5xl mt-8 mb-16 text-center">Galeria</h1>
      <PhotoAlbum {...albumProps} />
    </div>
  );
};

export default Gallery;
