import { useState } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={()=>setOpen(!open)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="./logo.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/my-account"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  My Account
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-800 hover:text-gray-500 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu" style={{height: open ? "160px" : "0"}}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            to="/"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/my-account"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Account
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;