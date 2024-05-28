"use client";
import ProductItem from "@/components/ui/ProductItem";
import { useCartStore } from "@/store/cart-store";
import useSWR from "swr";

export default function ListProductsShop() {
  const { data, error, isLoading, isValidating, mutate } = useSWR("/products", {
    revalidateOnFocus: false,
    dedupingInterval: 500,
  });

  const { cart, addToCart } = useCartStore((state: any) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));
  const handleAddToCart = (product: { id: number; quantity: number }) => {
    addToCart(product);
    // alert("add to cart", product.id);
  };
  return (
    <>
      {/* {data?.map((product: any) => (
        <ProductItem
          key={product.id}
          name={product.title}
          price={product.price}
          discount={5}
          rating={4.5}
          alt="product"
          src={product.image}
          className="p-2"
          eventAddToCart={handleAddToCart(product)}
        />
      ))} */}
      <ProductItem
        name="addidas New Hammer sole for Sports person"
        price={150}
        discount={5}
        rating={4.5}
        alt="product"
        src="/products/p1.jpg"
        className="p-2"
        eventAddToCart={() =>
          handleAddToCart({
            id: 1,
            quantity: 1,
          })
        }
      />
    </>
  );
}
