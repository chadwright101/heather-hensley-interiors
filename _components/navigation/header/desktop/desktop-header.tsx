import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import { HeaderProps } from "@/_types/general-types";
import SocialButtons from "@/_components/ui/social/social-buttons";

export function DesktopHeader({ isScrolled, pathname }: HeaderProps) {
  return (
    <div className="hidden desktop:block ease-in-out duration-300 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-10 py-5 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          {!isScrolled && pathname === "/" ? (
            <Image
              src={
                pathname === "/"
                  ? "/logo/heather-hensley-interiors-logo-white.png"
                  : "/logo/heather-hensley-interiors-logo.png"
              }
              alt="Heather Hensley Interiors Logo"
              width={200}
              height={100}
              priority
              className="ease-in-out duration-300 w-[200px] h-auto"
            />
          ) : (
            <Image
              src="/logo/heather-hensley-interiors-logo.png"
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
        <SocialButtons />
      </div>
    </div>
  );
}
