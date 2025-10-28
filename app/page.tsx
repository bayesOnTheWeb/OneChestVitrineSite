import ContactSection from "./frontendComponent/server/contactSection";
import CallToAction from "./frontendComponent/server/CallToAction";
import NavBar from "./frontendComponent/server/Navbar";
import NavBarSecond from "./frontendComponent/server/NavbarSecond";
import Card from "./frontendComponent/server/Card";
import Footer from "./frontendComponent/server/Footer";
import Image from "next/image";

const services = [
  {
    id: 1,
    image: "picsLooseWheigt.svg",
    title: "PERTE DE POIDS",
    content: `- Programme adapté à ton niveau et ton matériel  
- Objectif précis : sèche, force ou recomposition  
- Suivi hebdo avec retours personnalisés  
- Application claire et simple à utiliser`,
  },
  {
    id: 2,
    image: "picsSuivis.svg",
    title: "SUIVI COMPLET",
    content: `- Plan d'entraînement et nutrition sur-mesure  
- Coaching technique avec analyses vidéo  
- Ajustements chaque semaine  
- Accompagnement mindset & performance`,
  },
  {
    id: 3,
    image: "picsTraining.svg",
    title: "TRAINING",
    content: `- Plan structuré et progressif selon ton objectif  
- Suivi des séances et conseils techniques  
- Méthode flexible ou macros selon ton niveau  
- Encadrement réactif et motivation constante`,
  },
];

export default function Page() {
  return (
    <>
      {/* Navbar mobile-first / desktop */}
      <div className="md:hidden">
        <NavBarSecond />
      </div>
      <div className="hidden md:block">
        <NavBar />
      </div>

      {/* Titre */}
      <h1 className="title-page">COACHING</h1>

      {/* Cartes de services */}
      <div className="grid-services">
        {services.map((service) => (
          <Card
            key={service.id}
            picture={service.image}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>

      {/* CTA en bas */}
      <div className="cta-wrapper">
        <CallToAction label="Accéder aux services" redirect="/services" />
      </div>

      <div className="flex justify-center">
        <Image
          src={"sectionProcess.svg"}
          alt={"procédure conseillé"}
          width={1280}
          height={1753}
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* Section contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
