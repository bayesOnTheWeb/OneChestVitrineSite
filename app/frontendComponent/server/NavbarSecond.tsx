import Image from "next/image";
import Link from "next/link";
import CallToAction from "./CallToAction";

export default function NavBarSecond() {
  return (
    <nav
      className="absolute top-0 left-0 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-16 sm:p-4 md:p-6 z-50"
      role="navigation"
      aria-label="Navigation principale"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex justify-center sm:justify-center mb-4 sm:mb-0"
        aria-label="Accueil"
      >
        <Image
          src="/logo.svg"
          alt="Logo du site web"
          width={60} // mobile
          height={60}
          className="sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </Link>

      {/* CTA */}
      <div className="flex justify-center flex-row sm:flex-row lg:pr-200 sm:justify-start gap-2 sm:gap-4 md:gap-6">
        <CallToAction label="Services" redirect="/services" />
        <CallToAction label="Contact" redirect="/contact" />
        <CallToAction label="À propos" redirect="/about" />
      </div>
    </nav>
  );
}
