"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function MobileHeader({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative px-7 py-5 min-[1000px]:hidden">
      <div
        className={classNames(
          "flex w-full items-center justify-between ease-in-out duration-300",
          {
            "translate-y-3.5": isScrolled,
          }
        )}
      >
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/logo/heather-hensley-interiors-logo.png"
            alt="Heather Hensley Interiors logo"
            width={367}
            height={215}
            priority
            className={classNames("h-16 w-auto ease-in-out duration-300", {
              "scale-80 -translate-y-2": isScrolled,
            })}
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className={classNames("ease-in-out duration-300 -m-3 p-3", {
            "-translate-y-1.5": isScrolled,
            "translate-y-1 ": !isScrolled,
          })}
          aria-label="Open menu"
        >
          <Image
            src="/icons/menu-open.svg"
            alt="Open menu"
            width={25}
            height={25}
          />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-dark-brown transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-10 items-center justify-end px-7">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className={classNames({
              "-mt-0.5": isScrolled,
              "mt-1.5": !isScrolled,
            })}
          >
            <Image
              src="/icons/menu-close.svg"
              alt="Close menu"
              width={25}
              height={25}
            />
          </button>
        </div>
        <nav className="px-7">
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] text-beige font-normal p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
            <li className="flex gap-5 items-center">
              <Link
                href="https://www.facebook.com/HeatherHensleyInteriors"
                target="_blank"
                className="p-2 -m-2"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Follow us on Facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.instagram.com/heather_hensley_interiors/"
                target="_blank"
                className="p-2 -m-2"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Follow us on Instagram"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
