import { NavHashLink } from "react-router-hash-link";
import Logo from "../shared/Logo";
import { useEffect, useMemo, useState } from "react";
import { animate, AnimationSequence, stagger } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";

const links = [
  { route: "/#hero", label: "Home" },
  { route: "/#services", label: "Services" },
  { route: "/#benefits", label: "Benefits" },
];

const MobileNavBar = ({ onClose }: { onClose: () => void }) => (
  <ul
    id="mobile-navbar"
    className="h-[0px] overflow-hidden fixed top-[80px] left-0 w-full bg-brown 546px:hidden opacity-0 pointer-events-none space-y-10 flex flex-col items-center justify-center"
  >
    {links.map((link) => (
      <li
        key={`mobile-${link.route}`}
        className="list-none opacity-0 mobile-navbar-link"
      >
        <NavHashLink
          onClick={onClose}
          to={link.route}
          className="text-white text-[30px] leading-[40px] font-sans"
        >
          {link.label}
        </NavHashLink>
      </li>
    ))}
  </ul>
);

const NavBar = () => {
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);
  const mobileNavBarShowSequence: AnimationSequence = useMemo(
    () => [
      [
        "#mobile-navbar",
        { opacity: 1, pointerEvents: "auto", height: window.innerHeight - 80 },
        { ease: "circInOut" },
      ],
      [
        ".mobile-navbar-link",
        { opacity: 1 },
        { duration: 0.1, delay: stagger(0.05) },
      ],
    ],
    []
  );
  const mobileNavBarHideSequence: AnimationSequence = useMemo(
    () => [
      [
        ".mobile-navbar-link",
        { opacity: 0 },
        { duration: 0.1, delay: stagger(0.05) },
      ],
      [
        "#mobile-navbar",
        { opacity: 0, pointerEvents: "none", height: 0 },
        { ease: "circInOut" },
      ],
    ],
    []
  );

  useEffect(() => {
    if (showMobileNavBar) {
      animate(mobileNavBarShowSequence);
    } else {
      animate(mobileNavBarHideSequence);
    }
  }, [showMobileNavBar, mobileNavBarShowSequence, mobileNavBarHideSequence]);

  return (
    <>
      <nav className="h-[80px] bg-bg px-4 shadow-sm">
        <div className="max-w-desktop flex justify-between mx-auto h-full items-center">
          <Link to={"/"} onClick={() => setShowMobileNavBar(false)}>
            <Logo />
          </Link>
          <button
            onClick={() => setShowMobileNavBar(!showMobileNavBar)}
            type="button"
            className="flex 546px:hidden flex-col space-y-2 w-8 items-center justify-center"
          >
            <div
              className={clsx(
                "h-[2px] bg-brown w-full relative transition-all duration-150",
                {
                  "rotate-45 translate-y-2 transition-all": showMobileNavBar,
                }
              )}
              id="hamburger-l-1"
            >
              <div className="absolute h-[1px] bg-[red] w-[1px] top-1/2 left-1/2"></div>
            </div>
            <div
              className={clsx(
                "h-[2px] bg-brown w-full transition-all duration-150",
                {
                  "opacity-0 transition-all": showMobileNavBar,
                }
              )}
              id="hamburger-l-2"
            ></div>
            <div
              className={clsx(
                "h-[2px] bg-brown w-full transition-all duration-150",
                {
                  "-rotate-45 -translate-y-3 transition-all": showMobileNavBar,
                }
              )}
              id="hamburger-l-3"
            ></div>
          </button>
          <ul className="space-x-10 items-center hidden 546px:flex">
            {links.map((link) => (
              <li key={link.route}>
                <NavHashLink
                  to={link.route}
                  className="text-brown text-[18px] leading-6 font-sans"
                >
                  {link.label}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <MobileNavBar onClose={() => setShowMobileNavBar(false)} />
    </>
  );
};

export default NavBar;
