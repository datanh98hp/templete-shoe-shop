import { ProductType } from "@/libs/types";
import { create } from "zustand";

export interface StoreFilterState {
    list: ProductType[],
    updateProductList: (payload: ProductType) => void;

}
const initiaState = {
    id: undefined,
    name: undefined,
    slug: undefined,
    items: [],
    original_price: undefined,
    category: undefined,
    product_images: [],
    promotion_category: undefined
}
export const useFilterStore = create<StoreFilterState>()((set) => ({
    list: [],
    updateProductList: (payload: ProductType) => {
        set((state) => ({ list: [payload, ...state.list] }))
    }
}));
