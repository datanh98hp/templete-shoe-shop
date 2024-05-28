"use client";
import React from "react";

export default function FormContact() {
  return (
    <form action="" className="mt-4 md:min-w-full">
      <div className=" border border-[0.02rem] mb-2 ">
        <input
          type="email"
          className="p-2 outline-none w-full"
          id=""
          placeholder="Enter your email"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className=" border border-[0.02rem] mb-2 ">
        <input
          type="text"
          className="p-2 outline-none w-full"
          id=""
          placeholder="Enter your name"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="border border-[0.02rem] mb-2 ">
        <textarea
          className="p-2 outline-none resize-none w-full"
          id=""
          placeholder="Enter your message"
          aria-disabled="true"
          rows={3}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <button
        className="bg-orange-500 p-2 w-full mt-4 text-white"
        onClick={(e) => console.log(e)}
      >
        Send
      </button>
    </form>
  );
}
