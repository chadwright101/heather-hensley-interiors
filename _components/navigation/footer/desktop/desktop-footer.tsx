import Image from "next/image";

export function DesktopFooter() {
  return (
    <div className="hidden min-[1000px]:block bg-dark-brown py-16">
      <div className="flex justify-between items-center px-[52px]">
        <Image
          src="/logo/heather-hensley-interiors-logo-large.png"
          alt="Heather Hensley Interiors"
          width={194}
          height={113}
        />
        <h4 className="normal-case font-giuliano-handwriting text-[#d9d2cc] text-[42px]">
          Transforming spaces, transforming lives
        </h4>
      </div>
    </div>
  );
}
