import BannerCommon from "@/components/common/BannerCommon";
import DealOfTheWeek from "@/components/contents/DealOfTheWeek";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BannerCommon title="Product" />
      {children}
      {/* <DealOfTheWeek /> */}
    </>
  );
}
