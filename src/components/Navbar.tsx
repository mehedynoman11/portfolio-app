import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-amber-500">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-amber-500">
        <Link href="#about">About</Link>
      </li>
      <li className="hover:text-amber-500">
        <Link href="#services">Services</Link>
      </li>
      <li className="hover:text-amber-500">
        <Link href="#work">Work</Link>
      </li>
      <li className="hover:text-amber-500">
        <Link href="#process">Process</Link>
      </li>
      <li className="hover:text-amber-500">
        <Link href="#blog">Blog</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-auto h-10"
              priority
            />
            <span className="font-bold text-sm md:text-2xl text-slate-800">
              Arena Web
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-semibold text-slate-700 transition-colors">
              {navLinks}
            </ul>
            <button className="btn btn-warning rounded-full font-bold px-6 text-slate-900 border-none bg-amber-400 hover:bg-amber-500">
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile Menu & Button Section */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Action Button (Optional: Small screen optimization) */}
            <button className="btn btn-warning btn-sm sm:btn-md rounded-full font-bold text-xs sm:text-sm bg-amber-400 border-none">
              Let&apos;s Connect
            </button>

            {/* Mobile Hamburger Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-2xl w-56 font-semibold gap-1 border border-slate-100"
              >
                {navLinks}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;