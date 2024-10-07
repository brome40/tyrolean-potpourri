'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

interface NavBarProps {
  toggle: () => void;
}

const NavBar = ({ toggle }:NavBarProps) => {
  const pathName = usePathname();

  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 border-b-2 border-b-[#990405] z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#990405"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-[#990405] text-lg font-semibold">
              <li>
                <Link href="/">
                  <p className={pathName === '/' ? 'text-black cursor-default' : 'hover:text-gray-500'}>ホーム</p>
                </Link>
              </li>
              <li>
                <Link href="/preview">
                  <p className={pathName === '/preview' ? 'text-black cursor-default' : 'hover:text-gray-500'}>プレビュー</p>
                </Link>
              </li>
              <li>
                <Link href="/members">
                  <p className={pathName === '/members' ? 'text-black cursor-default' : 'hover:text-gray-500'}>メンバーたち</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className={pathName === '/contact' ? 'text-black cursor-default' : 'hover:text-gray-500'}>お問合せ</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar
