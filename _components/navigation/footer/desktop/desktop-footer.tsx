import Image from "next/image";

export function DesktopFooter() {
  return (
    <div className="hidden min-[1000px]:block bg-black py-16">
      <div className="flex justify-between items-center px-[52px]">
        <Image
          src="/logo/heather-hensley-interiors-logo.png"
          alt="Heather Hensley Interiors"
          width={194}
          height={113}
        />
        <h4 className="normal-case font-giuliano-handwriting text-light-grey text-[42px]">
          Transforming spaces, transforming lives
        </h4>
      </div>
    </div>
  );
}
