import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-base-content secondary-bg">
      <div className="max-w-7xl mx-auto py-10 px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="primary-text text uppercase mb-3 ">Company</div>
            <div className="flex flex-col space-y-2">
              <Link
                href={"/about"}
                className="text-white no-underline text w-fit"
              >
                About us
              </Link>
              <Link href={"/"} className="text-white no-underline text w-fit">
                Contact us
              </Link>
            </div>
          </div>
          <div>
            <div className="primary-text text uppercase mb-3 mt-6 md:mt-0">
              Shop
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href={"/shop"}
                className="text-white no-underline text w-fit"
              >
                Shop all
              </Link>
              <Link href={"/"} className="text-white no-underline text w-fit">
                Shop recent
              </Link>
            </div>
          </div>
        </div>
        <div className="h-1 w-full rounded-2xl primary-bg my-5 md:my-8"></div>
        <div className="text-white text">© Tech Swift 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
