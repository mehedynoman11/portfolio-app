import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegLightbulb,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCall } from "react-icons/io5";

const Headline = () => {
  return (
    <div className="py-3 max-w-6xl mx-auto container hidden lg:block">
      <div className="flex justify-between items-center text-sm font-semibold">
        <p className="flex items-center gap-2">
          <span>
            <FaRegLightbulb />
          </span>{" "}
          Let&apos;s create something amazing!
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FiMail />
          </span>{" "}
          mehedynoman11@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <span>
            <IoCall />
          </span>{" "}
          +880 1771-645333
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FaClock />
          </span>{" "}
          Mon - Fri; 9AM - 6PM PST
        </p>
        <div className="flex gap-3 items-center text-lg">
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
    </div>
  );
};

export default Headline;
