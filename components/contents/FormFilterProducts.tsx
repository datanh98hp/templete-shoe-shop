"use client";
import { useFilterStore } from "@/store/filter-product.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

// interface FiltersProps {
//   onChange?: () => void;
//   onSubmit: () => void;
// }

export default function FormFilterProducts() {
  const [_sortBy, setSortBy] = useState("DESC");
  const [_brand, setBrand] = useState("");
  const [_keyword, setKeyword] = useState("");

  const { state, setStateFilter } = useFilterStore();
  const { page, items_per_page, sortBy, product_cate_id, keyword } = state;

  const router = useRouter();
  const submitFilterData = (e: any) => {
    e.preventDefault();
    setStateFilter({
      ...state,
      sortBy: _sortBy,
      brand: _brand,
      keyword: _keyword || "",
    });
    console.log("submitFilterData", state);
    router.push(
      `/shop?page=${page}&items_per_page=${
        items_per_page || ""
      }&sortBy=${sortBy}&product_cate_id=${product_cate_id || ""}&keyword=${
        _keyword || ""
      }`
    );
  };
  const eventChangeKeyword = (e: any) => {
    if (_keyword) {
      setKeyword(e.target.value);
      setStateFilter({
        ...state,
        sortBy: _sortBy,
        brand: _brand,
        keyword: _keyword,
      });
    } else {
      setKeyword(_keyword);
    }
  };
  useEffect(() => {
    setKeyword(_keyword);
  }, [_keyword]);
  return (
    <form className="max-w-[62rem] flex flex-row md:justify-end  justify-between flex-wrap gap-2 bg-[#828bb3] p-3">
      <div className="flex md:w-2/6 gap-2 items-center">
        {/* <label className="text-white min-w-fit">Color</label> */}
        <input
          type="text"
          name="keyword"
          value={_keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search"
          className="border p-2 w-full outline-none text-gray-500"
        />
      </div>

      <div className="flex md:w-1/6 gap-2 items-center">
        <select
          className="border p-2 w-full outline-none text-gray-500 min-w-fit"
          defaultValue={""}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option className="p-4" value={``}>
            ---Sort by---
          </option>
          <option className="p-4" value={`ASC`}>
            Icrease
          </option>
          <option className="p-4" value={`DESC`}>
            Decrease
          </option>
        </select>
      </div>

      <div className="flex md:w-1/6 gap-2 items-center">
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
      <div className=" bg-white p-2 ">
        <button onClick={submitFilterData}>Filter</button>
      </div>
    </form>
  );
}
