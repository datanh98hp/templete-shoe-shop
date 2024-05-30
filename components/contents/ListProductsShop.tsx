"use client";
import ProductItem from "@/components/ui/ProductItem";
import { ProductType, ProductItems } from "@/libs/types";
import { useCartStore } from "@/store/cart-store";

export default function ListProductsShop({ list }: { list?: Array<any> }) {
  // const { data, error, isLoading, isValidating, mutate } = useSWR("/product", {
  //   revalidateOnFocus: false,
  //   dedupingInterval: 500,
  // });

  const { cart, addToCart } = useCartStore((state: any) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));

  return (
    <>
      {list?.map((product: ProductType) => (
        // product.items.map((item) => (
        //   <ProductItem
        //     key={item.id}
        //     src={
        //       product.product_images[0]?.path
        //         ? `${" http://localhost:8001/"}` +
        //           product.product_images[0]?.path
        //         : "/products/p1.jpg"
        //     }
        //     // status={}
        //     alt={item.sku}
        //     name={item.sku}
        //     price={item.price}
        //     discount={
        //       product?.category?.promotion_category?.promotion?.discount_rate || null
        //     }
        //     rating={
        //       1
        //     }
        //   />
        // ))

        <ProductItem
          key={product.id}
          src={
            product.product_images[0]?.path
              ? `${" http://localhost:8001/"}` + product.product_images[0]?.path
              : "/products/p1.jpg"
          }
          status={product.items.length > 0 ? 1 : 0}
          alt={product.name}
          name={product.name}
          price={product.original_price  || 1}
          discount={
            product?.category?.promotion_category?.promotion?.discount_rate ||
            null
          }
          rating={5}
        />
      ))}
    </>
  );
}
