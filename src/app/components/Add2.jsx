import React from "react";
import Link from "next/link";
import Image from "next/image";

const Add2 = () => {
  return (
    <div className="w-full h-[550px] sm:h-[625px] md:h-[705px]  lg:h-[725px] bg-[url('/images/presummed_innocent_small_2x.jpeg')] sm:bg-[url('/images/presummed_innocent_small_2x.jpeg')] md:bg-[url('/images/presumed_innocent_mediumtall_2x.jpeg')] lg:bg-[url('/images/presumed_innocent_largetall_2x.jpeg')]  bg-bottom bg-cover relative ">
      <div class="w-full flex justify-center">
        <div class=" text-center text-white">
          <Image
            src="/images/logo_hero_light__d7t8cya4x26a_large_2x.png"
            alt="apple tv logo"
            width={90}
            height={80}
            className="mx-auto mb-[15rem] sm:mb-[18rem] md:mb-[20rem] lg:mb-[24rem] mt-10"
          />
          <h1 class=" text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 uppercase font-bold ">
            Presumed Innocent
          </h1>
          <h3 class=" text-xl sm:text-xl md:text-2xl lg:text-3xl font-light">
            A limited series event <br /> starring Jake Gyllenhaal
          </h3>
          {/* <h4 class="text-slate-400 text-sm sm:text-sm md:text-base lg:text-xl mt-2">
            Coming in beta this fall
          </h4> */}
          <div class="">
            <button class="bg-white text-black hover:bg-[#e4e4e4] outline-2 outline-[#e4e4e4] px-10 py-3 rounded-full mt-5 mr-5 text-xs sm:text-xs md:text-sm lg:text-base">
              Stream Now
            </button>
            {/* <button class="outline outline-2 outline-[#016ADD] text-[#016ADD] hover:outline-none hover:bg-[#016ADD] hover:text-white px-10 py-3 rounded-full mt-5 text-xs sm:text-xs md:text-sm lg:text-base">
              Buy
            </button> */}
          </div>
        </div>
      </div>
      <Link href="/"></Link>
    </div>
  );
};

export default Add2;
