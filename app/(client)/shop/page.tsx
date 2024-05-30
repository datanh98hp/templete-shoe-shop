import ListProductsShop from "@/components/contents/ListProductsShop";
import axiosClient from "@/libs/axios";
import axios from "axios";
import React from "react";
async function getListProduct() {
  try {
    const res = await axiosClient.get("/product?page=1");
    // console.log(res.data[6]);
    return res.data;
  } catch (error) {
    return [];
  }
}

export default async function ShopPage() {
  const data = await getListProduct();
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-1 md:justify-start ">
      <ListProductsShop list={data} />
    </div>
  );
}
