import { Link } from "react-router-dom";
import { useState } from "react";
import Proptypes from "prop-types";

import logo from "../../assets/logo.png";

function Nav({ page }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between font-semibold container mx-auto my-5 px-5">
        {/* Logo will come here */}
        <div className="inline-block">
          <img
            src={logo}
            alt=" "
            className="object-scale-down h-20 w-20 inline-block"
          />
          <p className="my-auto inline-block">Prisons fellowship Uganda</p>
        </div>
        {/* Menu items in the center here */}
        <div className="text-md hidden lg:flex text-center">
          <Link
            to="/"
            className={`my-auto ${page === "home" ? "font-bold" : ""}`}
          >
            <p className="block my-auto lg:inline-block hover:text-gray-700 mr-10">
              HOME
            </p>
          </Link>
          <Link to="/what_we_do" className="my-auto">
            <p className="block my-auto lg:inline-block hover:text-gray-700 mr-10">
              WHAT WE DO
            </p>
          </Link>
          <Link
            to="/stories"
            className={`my-auto ${page === "stories" ? "font-bold" : ""}`}
          >
            <p
              href="/"
              className="block my-auto lg:inline-block hover:text-gray-700 mr-10"
            >
              PRISON STORIES
            </p>
          </Link>
          <Link
            to="/about"
            className={`my-auto ${page === "about-us" ? "font-bold" : ""}`}
          >
            <p
              href="/"
              className="block hover:text-gray-700 my-auto lg:inline-block mr-10"
            >
              ABOUT US
            </p>
          </Link>
          <button className="my-auto inline-block mr-10">
            <svg
              className="fill-current h-20 w-5"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search</title>
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </button>

          <Link to="/donate">
            <button className="p-6 rounded-md text-white bg-red-700 mr-10">
              DONATE
            </button>
          </Link>
          <Link to="/get-started">
            <button className="p-6 rounded-md text-white bg-black">
              GET INVOLVED
            </button>
          </Link>
        </div>
        <div
          className="lg:hidden my-auto right-10 top-10 absolute"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <button className="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
          </button>
        </div>
        <div className={isNavOpen ? "h-100 w-100" : "hidden"}>
          <div
            className="absolute top-0 right-0 px-8 py-8 bg-white dark:bg-slate-700 "
            onClick={() => setIsNavOpen(false)}
          >
            <button>
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center font-semibold">
              <li className="my-3 block">
                <Link
                  to="/"
                  className={`${page === "home" ? "font-bold" : ""}`}
                >
                  <p className="hover:text-gray-700">HOME</p>
                </Link>
              </li>
              <li className="my-3 block">
                <Link
                  to="/what_we_do"
                  className={`${page === "what-we-do" ? "font-bold" : ""}`}
                >
                  <p className="hover:text-gray-700">WHAT WE DO</p>
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/stories"
                  className={`${page === "stories" ? "font-bold" : ""}`}
                >
                  <p className="hover:text-gray-700">PRISON STORIES</p>
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/about"
                  className={`${page === "about-us" ? "font-bold" : ""}`}
                >
                  <p className="hover:text-gray-700">ABOUT US</p>
                </Link>
              </li>
              <li className="my-3">
                <Link to="/donate">
                  <button className="p-6 rounded-md text-white bg-red-700">
                    DONATE
                  </button>
                </Link>
              </li>
              <li className="my-3">
                <Link to="/get-started">
                  <button className="p-6 rounded-md text-white bg-black">
                    GET INVOLVED
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  page: Proptypes.string,
};

export default Nav;
