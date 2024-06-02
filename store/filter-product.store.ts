import { create } from "zustand";


interface FilterProductProps {
    keyword?: string;
    product_cate_id?: string | number | undefined;
    sortBy?: string;
}
export interface StoreFilterState {
    state: FilterProductProps,
    setStateFilter: (payload: FilterProductProps) => void;

}
const initiaState = {
    keyword: "", sortBy: "DESC"
}
export const useFilterStore = create<StoreFilterState>()((set) => ({
    state: initiaState,
    setStateFilter: (payload) => set((state) => ({ state: { ...state.state, ...payload } })),
}));
