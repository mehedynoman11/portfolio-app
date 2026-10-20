import Image from "next/image";
import React from "react";
import { FaStar, FaTelegramPlane } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos, MdDiamond } from "react-icons/md";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services" className="bg-[#E9F3FD] py-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-5 px-4 md:px-0">
        {/* text  */}
        <div className="col-span-1 p-2 w-60">
          <span className="mb-6 uppercase text-blue-800 font-bold text-sm">
            Services & Packages
          </span>
          <h1 className="text-2xl font-bold">Simple Packages</h1>
          <span className="text-5xl font-dancing font-bold text-blue-700">Big Impact.</span>
          <p className="my-4">
            Flexible solutions for businesses at every stage.
          </p>
          <button className="btn rounded-4xl btn-outline font-bold">
            Explore
          </button>
        </div>

        {/* image */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card bg-white rounded-2xl h-80 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <span className="mb-3 uppercase text-blue-900 font-bold text-sm">
                  Starter
                </span>
                <span className="p-2 rounded-full bg-[#47A5FE]">
                  <FaTelegramPlane className="text-2xl text-white" />
                </span>
              </div>
              <h1 className="text-3xl font-bold">$750</h1>
              <p className="text-sm font-semibold grow-0">Perfect for small projects</p>
              <ol className="text-sm font-semibold">
                <li>{"✓ "}3 Page Website</li>
                <li>{"✓ "}Responsive Design</li>
                <li>{"✓ "}Basic SEO Setup</li>
                <li>{"✓ "}Contact Form</li>
              </ol>

              <div className="card-actions mt-6">
                <button className="btn rounded-4xl btn-outline font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
         <div className="card bg-white rounded-2xl h-80 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <span className="mb-3 uppercase text-[#F6C84D] font-bold text-sm">
                  Growth
                </span>
                <span className="p-2 rounded-full bg-[#FFC502]">
                  <FaStar className="text-2xl" />
                </span>
              </div>
              <h1 className="text-3xl font-bold">$1350</h1>
              <p className="text-sm font-semibold grow-0">Ideal for growing businesses</p>
              <ol className="text-sm font-semibold">
                <li>{"✓ "}Up to 7 Pages</li>
                <li>{"✓ "}Custom Design</li>
                <li>{"✓ "}SEO Optimization</li>
                <li>{"✓ "}Speed Optimiztion</li>
                <li>{"✓ "}30 Days Support</li>
              </ol>

              <div className="card-actions mt-2">
                <button className="btn rounded-4xl btn-warning font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-2xl h-80 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <span className="mb-3 uppercase font-bold text-sm">
                  Premium
                </span>
                <span className="p-2 rounded-full bg-[#47A5FE]">
                  <MdDiamond className="text-2xl text-white" />
                </span>
              </div>
              <h1 className="text-3xl font-bold">$750</h1>
              <p className="text-sm font-semibold grow-0">Perfect for small projects</p>
              <ol className="text-sm font-semibold">
                <li>{"✓ "}Up to 15 Pages</li>
                <li>{"✓ "}Advanced Features</li>
                <li>{"✓ "}E-Commerce Ready</li>
                <li>{"✓ "}Priority Support</li>
                <li>{"✓ "}60 Days Support</li>
              </ol>

              <div className="card-actions mt-2">
                <button className="btn rounded-4xl btn-outline font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
