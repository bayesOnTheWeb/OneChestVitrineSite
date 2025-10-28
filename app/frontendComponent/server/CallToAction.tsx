import Link from "next/link";

type CTAProps = {
  label: string;
  redirect: string;
};

export default function CallToAction({ label, redirect }: CTAProps) {
  return (
    <Link
      href={redirect}
      className="
        inline-flex
        items-center
        justify-center
        py-2 px-4
        bg-OneChestBlack
        text-OneChestWhite
        rounded-tr-2xl rounded-bl-2xl
        hover:opacity-80
        transition
        whitespace-nowrap
        text-sm sm:text-base md:text-base
      "
    >
      {label}
    </Link>
  );
}
