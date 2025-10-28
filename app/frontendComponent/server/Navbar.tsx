import Image from "next/image";
import Link from "next/link";
import CallToAction from "./CallToAction";

export default function NavBar() {
  return (
    <div className="relative w-full">
      {/* Bannière */}
      <div className="relative w-full h-[200px] md:h-[400px]">
        <Image
          src="/bannerPhoto.svg"
          alt="Bannière de la barre de navigation"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay pour réduire l'intensité sur mobile */}
        <div className="absolute inset-0 bg-white/40 md:bg-transparent"></div>
        {/* bg-white/40 = 40% opacité sur mobile, rien sur desktop */}
      </div>

      {/* Contenu de la navbar */}
      <nav
        className="absolute top-0 left-0 w-full flex flex-row sm:flex-row sm:items-center justify-between p-2 sm:p-4 md:p-6"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Logo */}

        <div className="p-8">
          <Link
            href="/"
            className="flex-shrink-0 mb-2 sm:mb-0"
            aria-label="Accueil"
          >
            <Image
              src="/logo.svg"
              alt="Logo du site web"
              width={60} // réduit pour mobile
              height={60}
              className="sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
          </Link>
        </div>

        {/* CTA */}
        <div className="flex sm:flex-row gap-2 sm:gap-4 md:gap-6">
          <CallToAction label="Services" redirect="/services" />
          <CallToAction label="Contact" redirect="/contact" />
          <CallToAction label="À propos" redirect="/about" />
        </div>
      </nav>
    </div>
  );
}
