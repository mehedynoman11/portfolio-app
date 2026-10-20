import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Blog = () => {
  return (
    <section id="blog" className="bg-[#FEF9F5]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-6 container mx-auto max-w-6xl px-4 md:px-0">
        {/* text  */}
        <div className="p-2 w-50 text-center md:text-left">
          <span className="mb-3 uppercase text-[#FFC502] font-bold text-sm">
            Happy Clients
          </span>
          <h1 className="text-2xl font-bold">Happy Clients.</h1>
          <span className="text-4xl text-blue-700 font-dancing font-bold">
            Real Results.
          </span>
          <button className="mt-6 btn rounded-4xl btn-outline font-bold flex gap-2 items-center">
            Read More Reviews{" "}
            <span>
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
        {/* card 1  */}
        <div className="card bg-white rounded-2xl h-60 w-80 shadow-xl p-3">
          <span className="text-3xl text-blue-400 mb-2"><FaQuoteLeft /></span>
          <p className="mb-4 text-sm font-semibold">
            Arena conpletely transformed our online presence. The site looks
            stunning and performs even better!
          </p>
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            <Image
              src="/c1.jpg"
              alt="Jessica Miller"
              width={48}
              height={48}
              loading="eager"
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />

            {/* Profile Info */}
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                Jessica Miller
              </h3>

              <p className="text-xs text-gray-500 sm:text-sm">
                Founder, Bloom & Wild
              </p>

              <div
                className="text-sm tracking-wide text-amber-400"
                aria-label="5 out of 5 stars"
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
        {/* card 2  */}
        <div className="card bg-white rounded-2xl h-60 w-80 shadow-xl p-3">
            <span className="text-3xl text-blue-400 mb-2"><FaQuoteLeft /></span>
          <p className="mb-4 text-sm font-semibold">
            Professional,creative and so easy to work with, Highly recommanded for any business looking to stand out online!
          </p>
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            <Image
              src="/c2.jpeg"
              alt="Jessica Miller"
              width={48}
              height={48}
              loading="eager"
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />

            {/* Profile Info */}
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                Emily Maitlis 
              </h3>

              <p className="text-xs text-gray-500 sm:text-sm">
                Ceo, Northern Studio
              </p>

              <div
                className="text-sm tracking-wide text-amber-400"
                aria-label="5 out of 5 stars"
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
