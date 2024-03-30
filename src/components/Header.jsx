import { brainwave } from "../assets";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  const pathname = useLocation();
  return (
    <div className="fixed w-full top-0 z-50 bg-black lg:bg-n-8/90 lg:backdrop-blur-sm border-b border-n-6">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            className=""
            src={brainwave}
            width={190}
            height={40}
            alt="brainwave"
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent
          ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
        `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((items) => (
              <a
                onClick={handleClick}
                key={items.id}
                href={items.url}
                className={`relative block font-code 
                text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  items.onlyMobile ? "lg:hidden" : "null"
                } px-6 py-6 md:py-8 lg mr-0.25 lg:text-xs lg:font-semibold  ${
                  items.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-2 xl:px-12`}
              >
                {items.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors
                hover:text-n-1 lg:block "
        >
          New account
        </a>
        <Button className="hidden lg:flex " href="#login">
          Sign In
        </Button>
        <Button onClick={toggleNavigation} className="ml-auto lg:hidden">
          <MenuSvg />
        </Button>
      </div>
    </div>
  );
};

export default Header;
