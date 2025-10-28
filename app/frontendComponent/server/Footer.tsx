import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-8 rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo et texte */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image
            src="/logo.svg"
            alt="logo du site web"
            height={60}
            width={60}
            className="rounded-2xl"
          />
          <p className="text-gray-700 text-sm text-center md:text-left">
            Clément Thepot, tous droits réservés, <br />
            dernière édition du site : 28 octobre 2025
          </p>
        </div>

        {/* Liens CGU */}
        <div className="text-sm">
          <Link href="/cgu" className="text-OneChestBlack hover:underline">
            CGU
          </Link>
        </div>

        {/* Réseaux sociaux (cachés sur mobile) */}
        <div className="hidden md:flex flex-row gap-4 text-sm">
          <Link
            href="https://www.instagram.com/one_chest_/"
            target="_blank"
            className="text-OneChestBlack hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@one.chest"
            target="_blank"
            className="text-OneChestBlack hover:underline"
          >
            TikTok
          </Link>
          <Link
            href="https://www.youtube.com/@One_chest"
            target="_blank"
            className="text-OneChestBlack hover:underline"
          >
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
