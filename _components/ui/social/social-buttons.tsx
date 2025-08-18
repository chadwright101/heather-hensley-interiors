import Image from "next/image";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <ul className="flex gap-8 items-center desktop:gap-7">
      <li>
        <Link
          href="https://www.facebook.com/HeatherHensleyInteriors"
          target="_blank"
          className="p-2 -m-2 inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out desktop:p-0 desktop:m-0 desktop:pb-1.5 desktop:-mb-1.5"
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
          className="p-2 -m-2 inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out desktop:p-0 desktop:m-0 desktop:pb-1.5 desktop:-mb-1.5"
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
  );
};

export default SocialButtons;
