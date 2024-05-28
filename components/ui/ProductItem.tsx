"use client";
import React from "react";
import { CiHeart, CiShoppingBasket, CiStar } from "react-icons/ci";
import Image from "next/image";
import clsx from "clsx";


export interface ProductProps {
  src: string;
  alt: string;
  name: string;
  price: number;
  discount: number;
  rating: number;
  className?: string;
  eventAddToCart?: () => void ;
  eventAddToFavorite?: () => void ;
}
export default function ProductItem({
  src,
  alt,
  name,
  price,
  discount,
  rating,
  className,
  eventAddToCart,
  eventAddToFavorite
}: ProductProps) {
 
  // const cart = useCartStore(state=>state.cart)
  // const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div
      className={clsx(
        "product_item cursor-pointer md:w-[17rem] hover:shadow-md hover:shadow-gray-300 my-2 flex flex-col md:justify-center items-center max-h-[28rem] max-w-[28rem] p-3 border",
        className
      )}
    >
      <Image
        width={0}
        height={0}
        src={src}
        alt={alt}
        sizes="60vh"
        style={{ width: "fit-content", height: "fit-content" }}
        priority={true}
        className="object-fit md:h-[20rem] md:min-h-0 overflow-hidden"
      />
      <div className="">
        <p className="md:w-[15rem] max-w-[25rem] uppercase font-semibold truncate hover:text-balance">
          {name}
        </p>
        <div className="flex">
          <p className="text-md font-semibold my-2 md:w-[15rem]">
            ${Math.round(price - (price * discount) / 100)}
            <span className="text-gray-500 line-through mx-6">$ {price}</span>
          </p>
        </div>
        <div
          className="action
                   flex flex-row gap-3"
        >
          <button 
          onClick={eventAddToCart}
          className="bg-[#ffba00]  text-white p-2 rounded-full flex gap-2">
            <CiShoppingBasket size={20} />
          </button>
          <button className="bg-[#ec2d0b]  text-white p-2 rounded-full flex gap-2">
            <CiHeart size={20} />
          </button>
          <p className="text-md grow font-semibold my-2 text-right flex flex-row gap-2 md:ml-20 ml-[15rem]">
            {rating}
            <CiStar size={20} color="orange" />
          </p>
        </div>
      </div>
    </div>
  );
}
