"use client";

import Image from "next/image";
import ContactSection from "../frontendComponent/server/contactSection";
import Footer from "../frontendComponent/server/Footer";
import NavBarSecond from "../frontendComponent/server/NavbarSecond";

export default function Page() {
  const aboutText = {
    title: "QUI SUIS-JE ?",
    content: `Salut,
Moi, c’est Clement !
Je me suis passionné depuis des années sur la science de l’entraînement et de la nutrition.
Atteint du syndrome de Poland, j’ai appris à dépasser mes limites et à adapter mon approche pour progresser malgré les obstacles.
Cette détermination m’a conduit jusqu’à la scène du Top de Colmar, où j’ai participé à ma première compétition de bodybuilding.
Aujourd’hui, j’accompagne mes coachés avec cette même rigueur et avec passion.`,
    image: "/AboutPic1.svg",
  };

  return (
    <div className="pt-20 relative w-full">
      <NavBarSecond />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-10 md:gap-16">
        <section className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          {/* Texte */}
          <div className="w-full md:w-2/3 flex flex-col gap-8 bg-transparent p-4 sm:p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-OneChestBlack">
              {aboutText.title}
            </h2>
            <p className="whitespace-pre-line text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              {aboutText.content}
            </p>
          </div>

          {/* Image 2/3 rounded-2xl avec ombre prononcée */}
          <div className="w-full p-10 md:w-2/3 flex justify-center relative">
            <Image
              src={aboutText.image}
              alt="Illustration Clem"
              height={600}
              width={600}
              className="hidden sm:flex rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </section>

        {/* Section contact en bas */}
        <section className="sm:pt-24 md:pt-28">
          <ContactSection />
        </section>
      </main>

      <div className="pt-16 sm:pt-20">
        <Footer />
      </div>
    </div>
  );
}
