import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div
      className={classNames(
        "hidden desktop:block ease-in-out duration-300 overflow-hidden",
        {
          "bg-dark-brown/90": isScrolled,
        }
      )}
    >
      <div className="max-w-[1600px] mx-auto px-10 py-5 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          {!isScrolled ? (
            <Image
              src="/logo/heather-hensley-interiors-logo-large-white.png"
              alt="Heather Hensley Interiors Logo"
              width={200}
              height={100}
              priority
              className="ease-in-out duration-300 w-[200px] h-auto"
            />
          ) : (
            <Image
              src="/logo/heather-hensley-interiors-logo-large.png"
              alt="Heather Hensley Interiors Logo"
              width={200}
              height={100}
              priority
              className="ease-in-out duration-300 w-[200px] h-auto"
            />
          )}
        </Link>

        <nav>
          <ul className="flex gap-10 items-center">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="uppercase font-light text-white inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="flex gap-7 items-center">
          <li>
            <Link
              href="https://www.facebook.com/HeatherHensleyInteriors"
              target="_blank"
              className="inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
            >
              <Image
                src="/icons/facebook-white.svg"
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
              className="inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5 relative"
            >
              <Image
                src="/icons/instagram-white.svg"
                alt="Follow us on Instagram"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
