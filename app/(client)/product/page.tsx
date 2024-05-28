import ContentProduct, { TabDescriptionProduct } from "@/components/contents/ContentProduct";
import DealOfTheWeek from "@/components/contents/DealOfTheWeek";
import SwiperProduct from "@/components/contents/SwiperProduct";

export default function Product() {
  return (
    <div className="md:flex flex-col w-screen items-center ">
      <div className="md:flex mx-4 md:my-32 my-20 gap-2 justify-between overflow-x-auto">
        <div className="md:w-[35rem] md:p-0">
          <SwiperProduct />
        </div>

        <div className="md:w-[35rem] ">
          <div className="md:p-16">
            <ContentProduct />
          </div>
        </div>
      </div>
      {/* <div>showing detail property</div> */}
      <div className="w-full  flex md:mx-4 md:my-4">
        <TabDescriptionProduct />
      </div>
      <DealOfTheWeek />
    </div>
  );
}
