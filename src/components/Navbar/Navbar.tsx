import { commonItems, customerItems } from "@/constants/linkItems";
import Link from "next/link";
import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const centerItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 1, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 base-bg shadow z-20">
      <div className="navbar bg-transparent max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            {/* start  */}
            <div className="drawer">
              <input
                id="dashboard-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}

                <label
                  htmlFor="dashboard-drawer"
                  tabIndex={0}
                  className="drawer-button btn btn-ghost lg:hidden"
                >
                  <CgMenuLeftAlt className="text-2xl" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="dashboard-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-44 md:w-60 min-h-full base-bg">
                  {customerItems?.map((item) => (
                    <li key={item?.id}>
                      <Link
                        className="no-underline primary-text info"
                        href={item?.href}
                      >
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ends */}
          </div>
          <a className="btn btn-ghost text-xl">Tech Swift</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {commonItems?.map((item) => (
              <li key={item?.id}>
                <Link
                  className="no-underline primary-text info"
                  href={item?.href}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="hidden lg:flex">
            <button className="btn lg:mr-3 btn-md">Create Account</button>
            <button className="btn btn-md">Login</button>
          </div>
          <div className="drawer drawer-end lg:hidden flex justify-end">
            <input
              id="common-items-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              {/* Page content here */}

              <label
                htmlFor="common-items-drawer"
                tabIndex={0}
                className="drawer-button btn btn-ghost lg:hidden"
              >
                <CgMenuRightAlt className="text-2xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="common-items-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-44 md:w-60 min-h-full base-bg">
                {commonItems?.map((item) => (
                  <li key={item?.id}>
                    <Link
                      className="no-underline primary-text info"
                      href={item?.href}
                    >
                      {item?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
