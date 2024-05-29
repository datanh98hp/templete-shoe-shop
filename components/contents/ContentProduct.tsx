"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import ReviewProductContainer from "@/components/contents/Product/ReviewProductContainer";
import { BiHeart } from "react-icons/bi";

export default function ContentProduct() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className=" ">
      <p className="text-2xl font-semibold">Faded SkyBlu Denim Jeans</p>
      <p className="font-bold text-xl text-orange-500">$149.99</p>
      <div className="py-4 text-sm">
        <p>
          Category: <span className="text-orange-500 ml-6">Household</span>
        </p>
        <p>
          Category: <span className=" ml-6">In Stock</span>
        </p>
      </div>
      <div className="h-[0.01rem] rounded-sm w-full bg-gray-300 " />
      <p className="py-4 text-sm text-gray-400">
        Mill Oil is an innovative oil filled radiator with the most modern
        technology. If you are looking for something that can make your interior
        look awesome, and at the same time give you the pleasant warm feeling
        during the winter.
      </p>
      <div className="flex flex-col md:mt-20">
        <input
          className="w-[4rem] h-8 border outline-none rounded-md border-gray-400 px-2"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          type="number"
        />
      </div>
      <div className="flex gap-2 items-center mt-3">
        <button className="py-2 px-6 my-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400">
          Add to cart
        </button>
        <button className="border border-orange-300  p-2 rounded-full outline-none hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 hover:text-white text-black  ">
          <CiShoppingBasket size={25} className=""  />  
        </button>
        <button className="border border-orange-300 p-2 rounded-full outline-none hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 hover:text-white text-black  ">
          <BiHeart size={25} className="" />
        </button>
      </div>
    </div>
  );
}

export function TabDescriptionProduct() {
  const [activeTab, setActiveTab] = useState("Specification");

  let listTabs = [
    {
      id: 1,
      title: "Description",
      content: () => <div>Description content</div>,
    },
    {
      id: 2,
      title: "Specification",
      content: () => <div>Content Specification</div>,
    },
    {
      id: 3,
      title: "Review",
      content: () => <ReviewProductContainer></ReviewProductContainer>,
    },
  ];

  return (
    <div className=" w-full border md:w-screen justify-center md:mx-12 mx-4">
      <div className="md:flex flex-row gap-3 justify-center text-center bg-gray-200">
        {listTabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.title)}
            className={clsx(
              "py-2 px-6 text-sm my-2 w-[10rem] border",
              activeTab === tab.title
                ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                : ""
            )}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {listTabs.map((tab) => (
        <div
          className={clsx("", activeTab === tab.title ? "block" : "hidden")}
          key={tab.id}
        >
          {tab.content()}
        </div>
      ))}
    </div>
  );
}
