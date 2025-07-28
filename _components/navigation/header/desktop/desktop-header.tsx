import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div
      className={classNames(
        "hidden px-10 pt-8 pb-6 min-[1000px]:flex justify-between ease-in-out duration-300 overflow-hidden desktop:duration-300",
        {
          "bg-beige/90": isScrolled,
        }
      )}
    >
      <Link
        href="/"
        className={classNames("hover:opacity-90 ease-in-out duration-300", {
          "scale-90 translate-y-2.5 -translate-x-3": isScrolled,
          "": !isScrolled,
        })}
      >
        <Image
          src="/logo/heather-hensley-interiors-logo-2.png"
          alt="Heather Hensley Interiors Logo"
          width={200}
          height={100}
          priority
          className="ease-in-out duration-300 w-[200px] h-auto"
        />
      </Link>
      <div
        className={classNames(
          "flex gap-5 items-center ease-in-out duration-300 -translate-y-1.5",
          {
            "translate-y-[18px]": isScrolled,
          }
        )}
      >
        <nav>
          <ul className="flex gap-5 items-center">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="text-[16px] font-normal uppercase text-light-brown hover:text-dark-brown ease-in-out duration-300"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="flex gap-3 items-center">
          <li>
            <Link
              href="https://www.facebook.com/HeatherHensleyInteriors"
              target="_blank"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/facebook-black.svg"
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
                src="/icons/instagram-black.svg"
                alt="Follow us on Instagram"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
