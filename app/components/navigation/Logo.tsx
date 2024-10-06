"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  // responsively control width of logo image
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  // responsively hide the logo image
  const [showButton, setShowButton] = useState(false);
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="/images/TIROLIAN_LOGO_02.jpg"
          alt="チロリアンポッポリのロゴ"
          width={width < 1024 ? "50" : "60"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
