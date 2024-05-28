"use client"
import React from 'react'
import Image from 'next/image'
export default function ListBrand() {
  return (
    <div className="flex flex-wrap flex-row justify-center items-center my-8 relative ">
      <div className="p-2 opacity-30 hover:opacity-100 md:mx-6 mx-2">
        <Image
          src="/brand/1.png"
          alt="image"
          width={150}
          height={150}
          sizes="100vw"
          style={{ width: "8rem", height: "auto" }}
        />
      </div>
      <div className="p-2 opacity-30 hover:opacity-100 md:mx-6 mx-2">
        <Image
          src="/brand/2.png"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "8rem", height: "auto" }}
        />
      </div>
      <div className="p-2 opacity-30 hover:opacity-100 md:mx-6 mx-2">
        <Image
          src="/brand/3.png"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "8rem", height: "auto" }}
        />
      </div>
      <div className="p-2 opacity-30 hover:opacity-100 md:mx-6 mx-2">
        <Image
          src="/brand/4.png"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "8rem", height: "auto" }}
        />
      </div>
      <div className="p-2 opacity-30 hover:opacity-100 md:mx-6 mx-2">
        <Image
          src="/brand/5.png"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "8rem", height: "auto" }}
        />
      </div>
    </div>
  );
}
