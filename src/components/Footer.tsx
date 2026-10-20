import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoCall } from "react-icons/io5";

const FooterPage = () => {
  return (
    <footer className="bg-[#0A1E37] py-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 justify-center items-center px-4 md:px-0 text-center md:text-left max-w-6xl container mx-auto">
        <div className="flex flex-col text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-auto h-10"
              priority
            />
            <span className="font-bold text-sm md:text-2xl">Arena Web</span>
          </Link>
          <p className="text-xs font-semibold">
            Creating beautiful, functional websites that help brands connect and
            grow.
          </p>
          <div className="flex gap-3 items-center text-lg mt-2">
            <Link
              className="hover:text-[#F7B600]"
              href={"https://github.com/mehedynoman11"}
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-[#F7B600]"
              href={"https://www.linkedin.com/in/mehedynoman11/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:text-[#F7B600]"
              href={"https://www.instagram.com/mehedynoman/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <span className="mb-3 uppercase text-[#FFC502] font-bold text-sm">
            Selected Work
          </span>
          <p className="text-xs font-bold mb-1">About Me</p>
          <p className="text-xs font-bold mb-1">Services</p>
          <p className="text-xs font-bold mb-1">My Work</p>
          <p className="text-xs font-bold mb-1">Process</p>
          <p className="text-xs font-bold mb-1">Blog</p>
        </div>
        {/* Resources  */}
        <div className="flex flex-col text-white">
          <span className="mb-3 uppercase text-[#FFC502] font-bold text-sm">
            Resources
          </span>
          <p className="text-xs font-bold mb-1">About Me</p>
          <p className="text-xs font-bold mb-1">Services</p>
          <p className="text-xs font-bold mb-1">My Work</p>
          <p className="text-xs font-bold mb-1">Process</p>
          <p className="text-xs font-bold mb-1">Blog</p>
        </div>
        {/* Lets connect  */}
        <div className="flex flex-col text-white">
          <span className="mb-3 uppercase text-[#FFC502] font-bold text-sm">
            Let&apos;s Connect
          </span>
          <p className="flex items-center gap-2 mb-1 text-xs">
            <span>
              <FiMail />
            </span>{" "}
            mehedynoman11@gmail.com
          </p>
          <p className="flex items-center gap-2 mb-1 text-xs">
            <span>
              <FaMapLocation />
            </span>{" "}
            Bogura, Bangladesh
          </p>
          <p className="flex items-center gap-2 mb-1 text-xs">
            <span>
              <IoCall />
            </span>{" "}
            +880 1771-645333
          </p>
          <div className="flex gap-3 items-center text-lg mt-2">
            <Link
              className="hover:text-[#F7B600]"
              href={"https://github.com/mehedynoman11"}
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-[#F7B600]"
              href={"https://www.linkedin.com/in/mehedynoman11/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:text-[#F7B600]"
              href={"https://www.instagram.com/mehedynoman/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        {/* circle  */}
        <div className="flex flex-col text-white">
          <div className="flex justify-center items-center p-2 border-2 w-34 h-34 border-blue-800 rounded-full">
            <div className="w-18 text-center">
              <p className="text-sm font-semibold">
                Design <br />
                with heart <br /> built to inspire{" "}
              </p>
              <span className="text-[#F7B600] text-lg flex justify-center mt-2 items-center">
                <FaHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
