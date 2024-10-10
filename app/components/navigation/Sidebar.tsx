'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({isOpen, toggle }:SidebarProps): JSX.Element => {
  const pathName = usePathname();

  return (
    <div
      className="sidebar-container fixed w-full h-full overflow-hidden bg-white grid pt-52 left-0 z-50"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <button className="absolute right-0 top-20 p-5" onClick={toggle}>
      {/* Close icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path
            fill="#990405"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav w-[80%] relative left-[10%] text-center leading-relaxed text-gray-100 text-xl">
        <li className='bg-[#990405] py-3 my-1 rounded-md'>
          <Link href="/" onClick={toggle}>
            <p className={pathName === '/' ? 'text-black cursor-default' : 'hover:text-gray-500'}>ホーム</p>
          </Link>
        </li>
        <li className='bg-[#990405] py-3 my-1 rounded-md'>
          <Link href="/preview" onClick={toggle}>
            <p className={pathName === '/preview' ? 'text-black cursor-default' : 'hover:text-gray-500'}>プレビュー</p>
          </Link>
        </li>
        <li className='bg-[#990405] py-3 my-1 rounded-md'>
          <Link href="/members" onClick={toggle}>
            <p className={pathName === '/members' ? 'text-black cursor-default' : 'hover:text-gray-500'}>メンバーたち</p>
          </Link>
        </li>
        <li className='bg-[#990405] py-3 my-1 rounded-md'>
          <Link href="/contact" onClick={toggle}>
            <p className={pathName === '/contact' ? 'text-black cursor-default' : 'hover:text-gray-500'}>お問合せ</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
