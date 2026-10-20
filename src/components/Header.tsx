import Image from "next/image";
import { FaArrowRight, FaRegPlayCircle } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto container py-2">
        {/* text */}
        <div className="flex flex-col justify-center max-w-100 mx-auto text-center md:text-left">
          <span className="mb-3 uppercase text-blue-800 font-bold text-sm">
            FREELANCE WEB DESIGNER
          </span>
          <h1 className="text-4xl font-bold mb-5">
            Designing Websites <br />{" "}
            <span className="text-[38px] text-[#1969E8]">That Inspire</span>{" "}
            <br />{" "}
            <p className="font-dancing text-6xl my-1 text-[#FFC502]">
              and Shine
            </p>
          </h1>
          <p className="text-sm font-semibold mb-8">
            I create beautiful, user-friendly websites that help brands stand
            out and grow online.
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <button className="btn btn-primary flex gap-2 items-center rounded-full">
              View My Work{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="btn btn-outline flex gap-2 items-center rounded-full">
              <span>
                <FaRegPlayCircle />
              </span>{" "}
              Watch Intro
            </button>
          </div>
          <p className="my-5 italic text-sm flex gap-2 items-center font-semibold"><span><FaArrowTrendUp /></span> Let&apos;s build something amazing together!</p>
        </div>

        {/* image */}
        <div className="relative flex justify-center overflow-hidden rounded-2xl">
          {/* মূল ছবি */}
          <Image
            src="/hero.jpeg"
            alt="hero"
            className="rounded-lg w-auto object-cover"
            style={{ width: "auto" }}
            loading="eager"
            width={350}
            height={350}
          />

          <div className="absolute right-4 top-12 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center z-10 w-28">
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1.5 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span className="text-3xl font-extrabold text-slate-900 leading-none">
              4+
            </span>
            <span className="text-xs font-semibold text-gray-600 mt-1 leading-tight">
              Years of Experience
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
