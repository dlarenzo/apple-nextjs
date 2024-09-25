import React from "react";
import Link from "next/link";

const Square3 = () => {
  return (
    <div className="w-full h-[600px] bg-[url('/images/promo_macbook_air_m3__6square_large_2x.jpeg')] bg-cover bg-center relative">
      <div class="w-full pt-10 flex justify-center">
        <div class="py-2 text-center text-black">
          <h1 class=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-bold">
            MacBook Air
          </h1>
          <h3 class=" text-lg sm:text-lg md:text-xl lg:text-2xl ">
            Lean. Mean. M3 machine.
          </h3>
          {/* <h4 class="text-slate-400 text-sm sm:text-sm md:text-base lg:text-xl mt-2">
            Coming in beta this fall
          </h4> */}
          <div class="">
            <button class="bg-[#016ADD] hover:bg-[#016bddd9] outline-2 outline-[#016ADD] text-white px-10 py-3 rounded-full mt-5 mr-5 text-xs sm:text-xs md:text-sm lg:text-base">
              Learn More
            </button>
            <button class="outline outline-2 outline-[#016ADD] text-[#016ADD] hover:outline-none hover:bg-[#016ADD] hover:text-white px-10 py-3 rounded-full mt-5 text-xs sm:text-xs md:text-sm lg:text-base">
              Buy
            </button>
          </div>
        </div>
      </div>
      <Link href="/"></Link>
    </div>
  );
};

export default Square3;
