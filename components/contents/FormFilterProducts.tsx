"use client";
import React from "react";

// interface FiltersProps {
//   onChange?: () => void;
//   onSubmit: () => void;
// }

export default function FormFilterProducts() {
  const submitFilterData = (e:any) => {
    e.preventDefault();
    console.log("submitFilterData");
  };
  return (
    <form className="flex flex-row md:justify-end  justify-start flex-wrap gap-2 bg-[#828bb3] p-3 w-full">
      <div className="flex gap-2 items-center">
        
        <select
          className="border p-2 w-full outline-none text-gray-500 min-w-fit"
          defaultValue={"Price"}
        >
          <option className="p-4" value={`Price`}>
            Price
          </option>
          <option className="p-4"> Icrease </option>
          <option className="p-4"> Decrease </option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        {/* <label className="text-white min-w-fit">Color</label> */}
        <select
          className="border p-2 w-full outline-none text-gray-500"
          defaultValue={"Color"}
        >
          <option className="p-2 my-2" value={`Color`}>
            Color
          </option>
          <option className="p-4 my-2"> Decrease </option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        {/* <label className="text-white min-w-fit">Sort by</label> */}
        <select
          className="border p-2 w-full outline-none text-gray-500"
          defaultValue={"Brand"}
        >
          <option className="p-2 my-2" value={`Brand`}>
            Brand
          </option>
          <option className="p-4 my-2"> Decrease </option>
        </select>
      </div>
      <div className="bg-white p-2">
        <button onClick={submitFilterData}>Filter</button>
      </div>
    </form>
  );
}
