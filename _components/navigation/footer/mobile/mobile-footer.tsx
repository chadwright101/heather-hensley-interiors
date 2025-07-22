import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-5 items-center px-7 py-10 desktop:hidden">
      <div className="text-center">
        <h4
          className="font-light text-[14px]"
          style={{ fontVariant: "normal" }}
        >
          © Swift Tool Hire
        </h4>
        <Link
          href="/"
          className="text-[14px] p-2 -m-2 text-link-blue font-light"
        >
          www.swifttoolhire.co.za
        </Link>
      </div>

      <Image
        src="/logo/swift-tool-hire-logo.png"
        alt="Swift Tool Hire"
        width={120}
        height={100}
        className="w-[104px] h-auto"
      />
      <div className="text-center">
        <p className="text-[14px]">Designed & developed by</p>
        <Link
          href="https://thewrightdesigns.co.za"
          aria-label="The Wright Designs"
          className="text-[14px] text-link-blue p-2 -m-2 font-light"
          target="_blank"
        >
          The Wright Designs
        </Link>
      </div>
    </div>
  );
}
