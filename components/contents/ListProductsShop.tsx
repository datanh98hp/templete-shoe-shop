"use client";
import ProductItem from "@/components/ui/ProductItem";
import useCallApi from "@/libs/api/useCallApi";
import { ProductType, ProductItems } from "@/libs/types";
import { useCartStore } from "@/store/cart.store";
import { useFilterStore } from "@/store/filter-product.store";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

export default function ListProductsShop() {
  //get params data from url
  const searchParams = useSearchParams();
  const product_cate_id = searchParams.get("product_cate_id");
  const items_per_page = searchParams.get("items_per_page");
  const page = searchParams.get("page");
  const sortBy = searchParams.get("sortBy");

  const keyword = searchParams.get("keyword");

  // const { state, setStateFilter } = useFilterStore((state: any) => ({
  //   state,
  //   setStateFilter: state.setStateFilter,
  // }));
  // console.log(state);

  // const { page, items_per_page, sortBy, product_cate_id } = state;

  const { data, error, isLoading } = useSWR(
    `/product?page=${page}&items_per_page=${
      items_per_page || ""
    }&sortBy=${sortBy}&product_cate_id=${product_cate_id || ""}&keyword=${keyword || ""}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
    }
  );

  //console.log(data);
  const list = data?.data.data || [];
  // const { total, currentPage, nextPage, previousPage, lastPage } =
  //   data?.data || {};
  /// console.log("other data ", data?.data);

  // const { cart, addToCart } = useCartStore((state: any) => ({
  //   cart: state.cart,
  //   addToCart: state.addToCart,
  // }));
  // useEffect(() => {
  //   //
  //   console.log("state", state);
  // }, [state, data]);
  const { cart, addToCart } = useCartStore((state: any) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));
  return (
    <div className="max-w-fit flex w-full flex-wrap md:gap-4">
      {isLoading && (
        <div className="w-full h-full h-50 w-50 flex justify-center">
          <span>Loading...</span>
        </div>
      )}
      {error && <div>Error fetching data</div>}

      {list?.map((product: ProductType) => (
        <ProductItem
          key={product.id}
          id={`${product.id}`}
          slug={product.slug}
          src={
            product.product_images[0]?.path
              ? `${" http://localhost:8001/"}` + product.product_images[0]?.path
              : "/products/p1.jpg"
          }
          status={product.items.length > 0 ? 1 : 0}
          name={product.name}
          price={product.original_price || 1}
          discount={
            product?.category?.promotion_category?.promotion?.discount_rate ||
            null
          }
          rating={5}
        />
      ))}
    </div>
  );
}
