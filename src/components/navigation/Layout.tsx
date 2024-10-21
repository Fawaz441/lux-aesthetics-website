import React, { PropsWithChildren, useEffect } from "react";
import clsx from "clsx";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = (props: PropsWithChildren & { className?: string }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div className="scroll-smooth">
      <div
        className={clsx("min-h-screen bg-bg flex flex-col", props.className)}
      >
        <div className="fixed top-0 left-0 w-full h-[80px] z-[2]">
          <NavBar />
        </div>
        <div className="flex-1 pt-[80px]">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
