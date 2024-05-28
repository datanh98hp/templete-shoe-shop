import HeaderNavigation from "@/components/common/HeaderNavigation";
import BannerHeader from "@/components/contents/BannerHeader";
import BreakContent from "@/components/contents/BreakContent";
import DealBanner from "@/components/contents/DealBanner";
import GridLayoutCatagory from "@/components/contents/GridLayoutCatagory";
import LatestProducts from "@/components/contents/LatestProducts";
import ListBrand from "@/components/ui/ListBrand";

export default function Home() {
  return (
    <main className="md:flex md:flex-col">
      <HeaderNavigation />
      <div className="min-h-full">
        <BannerHeader />
      </div>
      {/* ---- */}
      <div className="xl:px-24">
        <BreakContent />
        <GridLayoutCatagory />
      </div>
      <LatestProducts />

      <DealBanner />

      {/* List brand */}
      <ListBrand />
   
    </main>
  );
}
