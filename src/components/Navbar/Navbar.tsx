"use client";
import { commonItems, customerItems } from "@/constants/linkItems";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";
import PrimaryButton from "../Button/PrimaryButton";
import { authKey } from "@/constants/authToken";

const Navbar = () => {
  const pathname = usePathname();
  const [user, setUser] = useState("");
  const { userId } = getUserInfo() as { userId: string };
  const router = useRouter();
  const handleLogout = () => {
    removeUserInfo(authKey);
    setUser("");
    router.push("/login");
  };

  useEffect(() => {
    setUser(userId);
  }, [userId]);

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
                        className={`no-underline text-gray-800 info mx-3 ${
                          pathname == item?.href ? "text-[#457b9d]" : ""
                        }`}
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
              <Link
                key={item?.id}
                className={`no-underline text-gray-800 info mx-3 ${
                  pathname == item?.href ? "text-[#457b9d]" : ""
                }`}
                href={item?.href}
              >
                {item?.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          {!user ? (
            <div className="hidden lg:flex">
              <Link
                href={"/login"}
                className={`no-underline text-gray-800 info mr-6 ${
                  pathname == "/login" ? "text-[#457b9d]" : ""
                }`}
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className={`no-underline text-gray-800 info  ${
                  pathname == "/register" ? "text-[#457b9d]" : ""
                }`}
              >
                Create Account
              </Link>
            </div>
          ) : (
            <PrimaryButton
              onClick={handleLogout}
              label="Logout"
              type="button"
              size="small"
            />
          )}
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
                      className={`no-underline text-gray-800 info mx-3 ${
                        pathname == item?.href ? "text-[#457b9d]" : ""
                      }`}
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
