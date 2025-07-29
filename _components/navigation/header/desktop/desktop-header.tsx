import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div
      className={classNames(
        "hidden px-10 pt-8 pb-6 desktop:flex items-center justify-between ease-in-out duration-300 overflow-hidden desktop:duration-300",
        {
          "bg-dark-brown/90": isScrolled,
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
          src="/logo/heather-hensley-interiors-logo-small.png"
          alt="Heather Hensley Interiors Logo"
          width={200}
          height={100}
          priority
          className="ease-in-out duration-300 w-[200px] h-auto"
        />
      </Link>

      <nav>
        <ul className="flex gap-10 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li
                key={id}
                className={classNames(
                  "ease-in-out duration-300 -translate-y-1.5",
                  {
                    "translate-y-[18px]": isScrolled,
                  }
                )}
              >
                <Link
                  href={url}
                  className="font-light uppercase text-white inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul
        className={classNames(
          "flex gap-7 items-center ease-in-out duration-300 -translate-y-1.5",
          {
            "translate-y-[18px]": isScrolled,
          }
        )}
      >
        <li>
          <Link
            href="https://www.facebook.com/HeatherHensleyInteriors"
            target="_blank"
            className="inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Follow us on Facebook"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/heather_hensley_interiors/"
            target="_blank"
            className="inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Follow us on Instagram"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
