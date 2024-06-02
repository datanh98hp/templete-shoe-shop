import BannerCommon from "@/components/common/BannerCommon";
import DealOfTheWeek from "@/components/contents/DealOfTheWeek";
import FormFilterProducts from "@/components/contents/FormFilterProducts";
import CategoryShopItem from "@/components/ui/CategoryShopItem";
import Dropdown from "@/components/ui/Dropdown";
import axiosClient from "@/libs/axios";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Shop",
  description: "Dat anh Shoe - list products",
};
const data_cate = [
  {
    id: 1,
    name: "Sneakers",
    sub: [
      {
        id: 1,
        name: "Sneakers",
      },
      {
        id: 2,
        name: "Sneakers",
      },
      {
        id: 3,
        name: "Sneakers",
      },
    ],
  },
  {
    id: 2,
    name: "Sneakers",
    sub: [
      {
        id: 1,
        name: "Sneakers",
      },
      {
        id: 2,
        name: "Sneakers",
      },
      {
        id: 3,
        name: "Sneakers",
      },
    ],
  },
  {
    id: 3,
    name: "Sneakers",
    sub: [
      {
        id: 1,
        name: "Sneakers",
      },
      {
        id: 2,
        name: "Sneakers",
      },
      {
        id: 3,
        name: "Sneakers",
      },
    ],
  },
  {
    id: 4,
    name: "Sneakers",
    sub: [
      {
        id: 1,
        name: "Sneakers",
      },
      {
        id: 2,
        name: "Sneakers",
      },
      {
        id: 3,
        name: "Sneakers",
      },
    ],
  },
];
///get category product
interface CategoryDataProp {
  id: number;
  category_name: string;
  parent_category: CategoryDataProp;
  child_categories: CategoryDataProp[];
}
export async function getListCategory(): Promise<any> {
  try {
    const res = await axiosClient.get("/product-category");

    const data = res.data;
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getListCategory();
  // console.log(data);
  return (
    <>
      <BannerCommon title="Shop" />
      <div className="md:flex gap-4 justify-center md:my-24 my-20 md:mx-0">
        <div className="shadow-xl md:min-w-fit ">
          <div className="py-5 pl-6 bg-[#828bb3]">Browse Categories</div>
          <div className="">
            {data?.map((item: CategoryDataProp, index: number) => {
              if (item.child_categories.length > 0) {
                return (
                  <Dropdown
                    key={index}
                    absolute={false}
                    tile={item.category_name}
                    list={item.child_categories}
                  />
                );
              } else {
                return (
                  <CategoryShopItem key={index} title={item.category_name} id={item.id} />
                );
              }
            })}
          </div>
        </div>

        <div className="md:w-[51.5rem]">
          <FormFilterProducts />
          {/* list product */}
          <>{children}</>

          {/* pagination */}
          <div className="flex justify-center p-2">
            <div className="mx-3 px-3 py-1 rounded-full">{`<`}</div>
            {Array.from({ length: 7 }).map((item, index) => (
              <div
                key={index}
                className="mx-3 shadow-md px-3 py-1 rounded-full"
              >
                {index + 1}
              </div>
            ))}
            <div className="mx-3 shadow-md px-3 py-1 rounded-full">{`>`}</div>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col w-screen items-center ">
        <DealOfTheWeek />
      </div>
    </>
  );
}
