import classNames from "classnames";

export const buttonStyles = (
  colorGreen?: boolean,
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex text-[18px] font-normal text-center py-1.5 px-4 justify-center duration-500 border-4 rounded-[6px] font-bold min-w-[100px] cursor-pointer",
    cssClasses,
    {
      "desktop:hover:bg-white desktop:hover:text-black":
        !colorGreen && !disabled && !pending,
      "bg-light-green border-light-green text-white": colorGreen,
      "bg-light-green border-white text-white": !colorGreen,
      "desktop:hover:bg-white desktop:hover:border-light-green desktop:hover:text-black":
        colorGreen && !disabled && !pending,
      "opacity-50 cursor-not-allowed hover:none": pending,
    }
  );
