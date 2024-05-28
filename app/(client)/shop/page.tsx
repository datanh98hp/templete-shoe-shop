import ListProductsShop from '@/components/contents/ListProductsShop';
import ProductItem from '@/components/ui/ProductItem';
import React from 'react'
export default function ShopPage() {

  return (
    <div className=" flex flex-row flex-wrap justify-center gap-1 md:justify-start ">
      <ListProductsShop />
    </div>
  );
}
