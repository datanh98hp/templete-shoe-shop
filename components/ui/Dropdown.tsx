"use client";
import { useCartStore } from "@/store/cart.store";
import { useFilterStore } from "@/store/filter-product.store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
export default function Dropdown({
  list,
  tile,
  absolute,
}: {
  list?: Array<any>;
  tile: string;
  absolute: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { state, setStateFilter } = useFilterStore();
  const handleClickCategory = (id_category: number) => {
    // set filter category in store
    setStateFilter({ product_cate_id: id_category });
    // console.log(state);
    console.log(id_category);
  };
  return (
    <div className="ml-1 border-b w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          absolute ? "relative" : "",
          isOpen ? "font-semibold" : "",
          "p-3 flex justify-between items-center text-lg tracking-wide border-4 border-transparent active:text-white duration-300 border-b font-light w-full"
        )}
      >
        <span className="">{tile}</span>
        <span>
          {isOpen ? (
            <FaAngleDown size={20} width={10} />
          ) : (
            <FaAngleUp size={20} />
          )}
        </span>
      </button>

      {isOpen && (
        <div
          className={clsx(
            absolute ? "absolute top-0 left-0 bg-fuchsia-50" : ""
          )}
        >
          {list?.map((item, i) => (
            <div key={item.id} className="ml-4 p-3 border-b">
              <button
                className="font-light"
                onClick={() => handleClickCategory(item.id)}
              >
                {item.category_name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
