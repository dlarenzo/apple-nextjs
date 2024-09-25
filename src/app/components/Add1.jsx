import React from "react";
import Link from "next/link";

const Add1 = () => {
  return (
    <div className="w-full h-[550px] sm:h-[625px] md:h-[705px]  lg:h-[725px] bg-[url('/images/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg')] sm:bg-[url('/images/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg')] md:bg-[url('/images/hero_iphone15pro__i70z9oz3hj2i_mediumtall_2x.jpg')] lg:bg-[url('/images/hero_iphone15pro__i70z9oz3hj2i_largetall_2x.jpg')] pt-14  bg-bottom bg-cover relative ">
      <div class="w-full mt-4 flex justify-center">
        <div class="py-2 text-center text-white">
          <h1 class=" text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 font-bold">
            iPhone 15 Pro
          </h1>
          <h3 class=" text-xl sm:text-xl md:text-2xl lg:text-3xl ">
            Titanium. So strong. So light. So Pro.
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

export default Add1;
