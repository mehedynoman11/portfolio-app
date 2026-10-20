import Image from "next/image";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Work = () => {
  return (
    <section className="bg-[#FEF9F5] py-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* text  */}
        <div className="col-span-1 p-2 w-50">
          <span className="mb-3 uppercase text-[#FFC502] font-bold text-sm">
            Selected Work
          </span>
          <h1 className="text-2xl font-bold">A few recent favorites</h1>
          <span className="text-7xl ">
            <TbArrowWaveRightUp />
          </span>
          <p className="my-2">
            Every project is unique. Here are a few I&apos;m proud to have
            designed.
          </p>
          <button className="btn rounded-4xl btn-outline font-bold flex gap-2 items-center">
            See All Projects{" "}
            <span>
              <MdArrowForwardIos />
            </span>
          </button>
        </div>

        {/* image */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card bg-white rounded-2xl">
            <Image
              src="/f1.jpg"
              alt="f1"
              className="rounded-t-2xl w-auto object-cover h-60"
              style={{ width: "auto" }}
              loading="eager"
              width={150}
              height={150}
            />
            <div className="card-body">
              <div className="items-center flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">Bloom & Wild</h2>
                  <p className="text-sm">E-Commerce Website</p>
                </div>
                <span className="p-2 rounded-full bg-[#FFC502]"><IoMdArrowRoundForward className="text-2xl"/></span>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-2xl">
            <Image
              src="/f2.jpg"
              alt="f2"
              className="rounded-t-2xl w-auto object-cover h-60"
              style={{ width: "auto" }}
              loading="eager"
              width={150}
              height={150}
            />
            <div className="card-body">
              <div className="items-center flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">Northland Studio</h2>
                  <p className="text-sm">Creative Agency Website</p>
                </div>
                <span className="p-2 rounded-full bg-[#FFC502]">
                  <IoMdArrowRoundForward className="text-2xl" />
                </span>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-2xl">
            <Image
              src="/f3.jpg"
              alt="f3"
              className="rounded-t-2xl w-auto object-cover h-60"
              style={{ width: "auto" }}
              loading="eager"
              width={150}
              height={150}
            />
            <div className="card-body">
              <div className="items-center flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">Pure Balance</h2>
                  <p className="text-sm">Wellness Website</p>
                </div>
                <span className="p-2 rounded-full bg-[#FFC502]">
                  <IoMdArrowRoundForward className="text-2xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
