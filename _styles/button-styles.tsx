import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) => {
  const isDisabled = pending || disabled;

  return classNames(
    "bg-light-brown text-white flex text-paragraph uppercase font-light text-center py-3 px-10 justify-center duration-500 rounded-[6px] min-w-[250px] max-w-[600px] inline-block",
    cssClasses,
    {
      "cursor-pointer": !isDisabled,
      "opacity-50 cursor-not-allowed hover:none": isDisabled,
      "desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out":
        !isDisabled,
    }
  );
};
