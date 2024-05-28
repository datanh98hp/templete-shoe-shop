import React from 'react'

export default function GridLayoutCatagory() {
  return (
    <div className="my-14 md:mx-36">
      <div className="md:grid px-2 md:mx-2 grid-cols-4 auto-cols-max gap-4 text-wrap text-center">
        <div className="col-span-2 relative h-[14rem]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(/category/c1.jpg)` }}
          ></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-10 z-10 flex justify-center items-center text-2xl text-white font-semibold">
            Category text
          </div>
        </div>
        <div className="col-span-1 relative h-[14rem]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(/category/c1.jpg)` }}
          ></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-10 z-10 flex justify-center items-center text-2xl text-white font-semibold">
            Category text
          </div>
        </div>
        <div className="row-span-2  relative h-full">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(/category/c1.jpg)` }}
          ></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-10 z-10 flex justify-center items-center text-2xl text-white font-semibold">
            Category text
          </div>
        </div>
        <div className="col-span-1 relative h-[14rem]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(/category/c1.jpg)` }}
          ></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-10 z-10 flex justify-center items-center text-2xl text-white font-semibold">
            Category text
          </div>
        </div>
        <div className="col-span-2 relative h-[14rem]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(/category/c1.jpg)` }}
          ></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-10 z-10 flex justify-center items-center text-2xl text-white font-semibold">
            Category text
          </div>
        </div>
      </div>
    </div>
  );
}
