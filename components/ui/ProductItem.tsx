"use client";
import React from "react";
import { CiHeart, CiShoppingBasket, CiStar } from "react-icons/ci";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export interface ProductProps {
  id: string;
  src: string;
  name: string;
  slug:string;
  price: number;
  discount: number | null;
  rating: number;
  status?: number; //0: out of stock  | 1: stocking
  className?: string;
  eventAddToCart?: () => void;
  eventAddToFavorite?: () => void;
}
export default function ProductItem({
  id,
  src,
  name,
  slug,
  price,
  discount,
  rating,
  status,
  className,
  // eventAddToCart,
  eventAddToFavorite,
}: ProductProps) {
  // const cart = useCartStore(state=>state.cart)
  // const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div
      className={clsx(
        "product_item cursor-pointer md:w-[17rem] w-full hover:shadow-md hover:shadow-gray-300 my-2 flex flex-col md:justify-start  max-h-[28rem] max-w-[28rem] p-3 border relative",
        className
      )}
    >
      <Image
        width={40}
        height={40}
        src={src}
        alt={name}
        sizes="100vh"
        style={{ width: "auto", height: "auto" }}
        priority={true}
        className="object-fit md:h-[20rem] h-full md:min-h-0 overflow-hidden"
      />
      <div
        className={clsx(
          "absolute w-full md:top-28 top-36 right-0 p-4 bg-opacity-30 bg-white",
          status && status > 0 ? "hidden" : "block"
        )}
      >
        <p className="text-black text-center text-sm font-semibold">
          Out of stock
        </p>
      </div>
      {discount && (
        <div
          className={clsx(
            "absolute top-1 right-0 px-2 py-3 text-white w- bg-orange-600 rounded-full text-sm font-semibold"
          )}
        >
          -{discount}%
        </div>
      )}

      <div className="">
        <Link href={`/product/${id}/${slug}`} className="">
          <p className="md:w-[15rem] max-w-sm uppercase font-semibold truncate hover:text-balance">
            {name}
          </p>
        </Link>
        <div className="flex">
          <p className="text-md font-semibold my-2 md:w-[15rem]">
            {discount && (
              <span className="mr-6 ">
                ${Math.round(price - (price * (discount ?? 0)) / 100)}
              </span>
            )}
            <span
              className={clsx(
                "",
                discount ? " text-gray-500 line-through" : ""
              )}
            >
              $ {price}
            </span>
          </p>
        </div>
        <div className="action flex flex-row items-center justify-between">
          <button className="bg-[#ec2d0b]  text-white p-2 rounded-full flex gap-2">
            <CiHeart size={20} />
          </button>
          <span className="text-md grow font-semibold my-1 text-right flex flex-row gap-2 md:ml-20 ml-[15rem]">
            {rating}
            <CiStar size={20} color="orange" />
          </span>
        </div>
      </div>
    </div>
  );
}
