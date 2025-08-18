import Image from "next/image";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-12 items-center px-7 py-10 min-[1000px]:hidden">
      <Image
        src="/logo/heather-hensley-interiors-logo.png"
        alt="SHeather Hensley Interiors"
        width={500}
        height={290}
        className="h-auto w-2/3 max-w-[400px]"
        quality={60}
      />
      <h4 className="normal-case font-giuliano-handwriting text-[23px] text-light-grey text-center">
        Transforming spaces, transforming lives
      </h4>
    </div>
  );
}
