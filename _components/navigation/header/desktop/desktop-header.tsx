import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div className="hidden px-10 py-5 min-[1000px]:flex justify-between ease-in-out duration-300 overflow-hidden desktop:duration-300">
      <Link
        href="/"
        className={classNames("hover:opacity-90 ease-in-out duration-300", {
          "scale-75 translate-y-2.5 -translate-x-5": isScrolled,
          "": !isScrolled,
        })}
      >
        <Image
          src="/logo/heather-hensley-interiors-logo.png"
          alt="Heather Hensley Interiors Logo"
          width={173}
          height={101}
          priority
          className="ease-in-out duration-300 h-[101px] w-auto"
        />
      </Link>
      <div
        className={classNames(
          "flex flex-col justify-between ease-in-out duration-300",
          {
            "translate-y-1.5": isScrolled,
          }
        )}
      >
        <ul
          className={classNames(
            "flex gap-3 items-center place-self-end ease-in-out duration-300",
            {
              "translate-y-4": isScrolled,
            }
          )}
        >
          <li>
            <Link
              href="https://www.facebook.com/HeatherHensleyInteriors"
              target="_blank"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Follow us on Facebook"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/heather_hensley_interiors/"
              target="_blank"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Follow us on Instagram"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
        <nav className="ease-in-out duration-300 place-self-end">
          <ul className="flex gap-5 items-center">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="text-paragraph font-thin uppercase text-beige hover:text-white ease-in-out duration-300"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
