"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";

import SocialButtons from "@/_components/ui/social/social-buttons";

import navData from "@/_data/nav-data.json";

export function MobileHeader() {
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
    <div className="relative px-5 pt-6 pb-5 phone:py-8 desktop:hidden ease-in-out duration-300">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5 w-full items-center ease-in-out duration-300">
          <Link href="/" className="flex gap-1 items-center translate-y-2">
            <Image
              src="/logo/heather-hensley-interiors-logo-white.png"
              alt="Heather Hensley Interiors logo"
              width={190}
              height={105}
              priority
              className="h-auto w-[150px] ease-in-out duration-300 phone:w-[190px]"
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer w-full -m-3 p-3"
            aria-label="Open menu"
          >
            <Image
              src="/icons/menu-open.svg"
              alt="Open menu"
              width={25}
              height={25}
              className="mx-auto"
            />
          </button>
        </div>
        <SocialButtons />
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-black/95 transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-10 items-center justify-end px-7">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 -m-2 cursor-pointer"
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
                    className="text-[20px] text-light-grey font-thin p-3 -m-3 uppercase"
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
                  src="/icons/facebook-white.svg"
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
                  src="/icons/instagram-white.svg"
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
