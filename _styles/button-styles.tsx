import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "bg-light-brown text-white flex text-paragraph uppercase font-light text-center py-3 px-10 justify-center duration-500 rounded-[6px] min-w-[250px] max-w-[600px] cursor-pointer inline-block",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed hover:none": pending || disabled,
      "desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out":
        !(pending || disabled),
    }
  );
