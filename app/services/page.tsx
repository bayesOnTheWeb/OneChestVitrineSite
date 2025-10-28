"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import NavBarSecond from "../frontendComponent/server/NavbarSecond";
import CallToAction from "../frontendComponent/server/CallToAction";

// Liste de services pour le slider (desktop)
const sliderServices = [
  {
    id: 1,
    image: "/CoverPoids.svg",
    title: "PERTE DE POIDS",
    content: `- Programme adapté à ton niveau et ton matériel  
- Objectif précis : sèche, force ou recomposition  
- Suivi hebdo avec retours personnalisés  
- Application claire et simple à utiliser`,
  },
  {
    id: 2,
    image: "/CoverSuivis.svg",
    title: "SUIVI COMPLET",
    content: `- Plan d'entraînement et nutrition sur-mesure  
- Coaching technique avec analyses vidéo  
- Ajustements chaque semaine  
- Accompagnement mindset & performance`,
  },
  {
    id: 3,
    image: "/CoverTraining.svg",
    title: "TRAINING",
    content: `- Plan structuré et progressif selon ton objectif  
- Suivi des séances et conseils techniques  
- Méthode flexible ou macros selon ton niveau  
- Encadrement réactif et motivation constante`,
  },
];

// Nouvelle liste de services pour les cartes statiques (mobile-first)
const cardServices = [
  {
    id: 1,
    image: "/picsLooseWheigt.svg",
    title: "PERTE DE POIDS",
    content: `- Programme adapté à ton niveau et ton matériel  
- Objectif précis : sèche, force ou recomposition  
- Suivi hebdo avec retours personnalisés  
- Application claire et simple à utiliser`,
  },
  {
    id: 2,
    image: "/picsSuivis.svg",
    title: "SUIVI COMPLET",
    content: `- Plan d'entraînement et nutrition sur-mesure  
- Coaching technique avec analyses vidéo  
- Ajustements chaque semaine  
- Accompagnement mindset & performance`,
  },
  {
    id: 3,
    image: "/picsTraining.svg",
    title: "TRAINING",
    content: `- Plan structuré et progressif selon ton objectif  
- Suivi des séances et conseils techniques  
- Méthode flexible ou macros selon ton niveau  
- Encadrement réactif et motivation constante`,
  },
];

export default function Page() {
  return (
    <div className="relative w-full">
      <NavBarSecond />

      {/* Slider desktop only */}
      <div className="hidden md:flex w-full h-screen relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {sliderServices.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="relative w-full h-screen">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 h-full w-full md:w-1/2 flex flex-col justify-center p-12 bg-gradient-to-r from-white/70 to-transparent">
                  <h2 className="text-4xl font-bold mb-6 text-OneChestBlack">
                    {service.title}
                  </h2>
                  <p className="text-lg whitespace-pre-line text-OneChestBlack mb-6">
                    {service.content}
                  </p>
                  <CallToAction label="RÉSERVER" redirect="/contact" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile fallback */}
      <div className="flex pt-50 md:hidden flex-col items-center pb-2 px-4 text-center gap-4">
        <p className="text-lg text-gray-700">
          Découvrez nos services sur un écran plus grand pour profiter du slider
          interactif.
        </p>
        <CallToAction label="Voir les services" redirect="/services" />
      </div>

      {/* Cartes statiques mobile-first */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-OneChestBlack">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center whitespace-pre-line mb-4">
              {service.content}
            </p>
            <CallToAction label="RÉSERVER" redirect="/contact" />
          </div>
        ))}
      </section>
    </div>
  );
}
