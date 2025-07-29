"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header
      className={classNames(
        "sticky left-0 mx-auto z-50 ease-in-out duration-300 overflow-y-hidden",
        {
          "-top-3 min-[1000px]:-top-5": isScrolled,
          "top-0": !isScrolled,
        }
      )}
    >
      <div className="relative">
        <MobileHeader isScrolled={isScrolled} />
        <DesktopHeader isScrolled={isScrolled} />
      </div>
    </header>
  );
}
