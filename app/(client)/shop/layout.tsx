import BannerCommon from "@/components/common/BannerCommon";
import DealOfTheWeek from "@/components/contents/DealOfTheWeek";
import FormFilterProducts from "@/components/contents/FormFilterProducts";
import Dropdown from "@/components/ui/Dropdown";

import { Metadata } from "next";
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
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BannerCommon title="Shop" />
      <div className="md:flex gap-4 justify-center md:my-24 my-20 md:mx-0">
        <div className="shadow-xl md:min-w-fit ">
          <div className="py-5 pl-6 bg-[#828bb3]">Browse Categories</div>
          <div className="">
            <Dropdown absolute={false} tile="Shoe for Men" list={data_cate} />
            <Dropdown
              absolute={false}
              tile="Shoe for Children"
              list={data_cate}
            />
            <Dropdown absolute={false} tile="Shoe for Woman" list={data_cate} />
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
      <DealOfTheWeek />
    </>
  );
}
