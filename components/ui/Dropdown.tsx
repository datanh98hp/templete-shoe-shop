"use client";
import clsx from "clsx";
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
              <h3 className="font-light">{item.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
