import { create } from "zustand";


interface FilterProductProps {
    keyword?: string;
    page?: string | number| undefined; 
    items_per_page?: string | number | undefined;
    product_cate_id?: string | number | undefined;
    sortBy?: string;
}
export interface StoreFilterState {
    state: FilterProductProps,
    setStateFilter: (payload: FilterProductProps) => void;

}
const initiaState = {
    keyword: "",page: 1, items_per_page: 10, sortBy: "DESC"
}
export const useFilterStore = create<StoreFilterState>()((set) => ({
    state: initiaState,
    setStateFilter: (payload) => set((state) => ({ state: { ...state.state, ...payload } })),
}));
