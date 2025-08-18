"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

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
        "w-full mx-auto z-50 ease-in-out duration-300 overflow-y-hidden",
        {
          "absolute desktop:fixed left-0": pathname === "/",
          "bg-black/90 desktop:sticky desktop:top-0": pathname !== "/",
          "desktop:bg-black/[89%]": pathname === "/" && isScrolled,
        }
      )}
    >
      <div className="relative">
        <MobileHeader />
        <DesktopHeader isScrolled={isScrolled} pathname={pathname} />
      </div>
    </header>
  );
}
