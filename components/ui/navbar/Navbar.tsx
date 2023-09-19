"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import GradientContainer from "../GradientContainer";

type Props = {};
export default function Navbar({}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Function to check the screen size and update the state
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };
    // Add an event listener for screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className=" py-8 font-montserrat px-8 2xl:px-5 border-b border-white/10">
      <nav className="flexed contain">
        <div className="">
          <Image
            src="/getlinked.png"
            alt="logo"
            width={150}
            height={150}
            className="hidden lg:block"
          />
          <Image
            src="/getlinked.png"
            alt="logo"
            width={100}
            height={100}
            className="lg:hidden"
          />
        </div>
        <div className="hidden md:w-full md:justify-end md:flex lg:gap-32 md:gap-10 md:text-sm lg:text-base text-white ">
          <ul className="flexed gap-16">
            <li>
              <Link href="/">TimeLine</Link>
            </li>
            <li>
              <Link href="/">Overview</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <Button className="w-40 " variant="gradient">
            Register
          </Button>
        </div>
        <div onClick={toggleMenu}>
          <Image
            src="/menu.png"
            alt="logo"
            width={18}
            height={18}
            className="md:hidden block"
          />
        </div>
      </nav>
      {showMenu && <MobileMenu onClick={toggleMenu} />}
    </header>
  );
}

const MobileMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="text-white absolute w-full h-full bg-secondary right-0 left-0 mx-auto top-0 flex flex-col gap-5 p-12 font-inter text-xl">
      <GradientContainer onClick={onClick}>
        <X width={24} height={24} />
      </GradientContainer>
      <div className="pt-10 pb-8">
        <ul className="space-y-6" onClick={onClick}>
          <li>
            <Link href="/">TimeLine</Link>
          </li>
          <li>
            <Link href="/">Overview</Link>
          </li>
          <li>
            <Link href="/">FAQs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Button className="w-48 text-lg" variant="gradient" onClick={onClick}>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
};
