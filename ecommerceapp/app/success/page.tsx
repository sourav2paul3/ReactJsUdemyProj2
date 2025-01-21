import React from "react";
import { FaArrowRight } from "react-icons/fa";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-[#4F46E5] font-bold">Success</p>
      <h1 className="sm:text-5xl text-3xl font-bold text-gray-900 text-center">
        Your order has been placed!🎉
      </h1>
      <p className="text-[#4F46E5]">Thank you for your purchase</p>
      <a
        href="/"
        className="mt-10 bg-[#4F46E5] text-white px-3.5 py-2.5 rounded-md flex items-center justify-center font-semibold gap-2"
      >
        Continue shopping <FaArrowRight />
      </a>
    </div>
  );
};

export default page;
