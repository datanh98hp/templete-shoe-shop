"use client";
import { useFilterStore } from "@/store/filter-product.store";
import React from "react";

export default function CategoryShopItem({
  id,
  title,
}: {
  id: number;
  title: string;
}) {
  const { state, setStateFilter } = useFilterStore();
  const handleClickCategory = (id_category: number) => {
    // set filter category in store
    setStateFilter({ product_cate_id: id_category });
   // console.log(id_category);
  };

  return (
    <div
      onClick={() => handleClickCategory(id)}
      className="ml-1 border-b w-full "
    >
      <button className="p-3 flex justify-between items-center text-lg tracking-wide border-4 border-transparent active:text-white duration-300 border-b font-light w-full hover:text-gray-700">
        {title}
      </button>
    </div>
  );
}
