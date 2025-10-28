"use client";

import ContactForm from "../frontendComponent/client/contactForm";
import NavBarSecond from "../frontendComponent/server/NavbarSecond";
import Image from "next/image";

export default function Page() {
  const contactSection = {
    title: "ME CONTACTER",
    content: `Tu peux me contacter pour toute demande liée à :  
- Un accompagnement sportif personnalisé  
- Une question sur les programmes en ligne  
- Une demande de coaching à distance ou en présentiel (suivant la distance)  
- Des conseils sur la prise de masse, remise en forme ou la nutrition`,
    image: "/picsAbout.svg",
  };

  return (
    <div className="pt-20 relative w-full">
      <NavBarSecond />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-10 md:gap-12">
        <section className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          {/* Texte + Formulaire */}
          <div className="w-full md:w-2/3 flex flex-col gap-8 bg-transparent p-4 sm:p-6 md:p-8 rounded-lg">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-OneChestBlack">
                {contactSection.title}
              </h1>
              <p className="whitespace-pre-line text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                {contactSection.content}
              </p>
              <p className="mt-6 text-OneChestBlack font-medium text-sm sm:text-base md:text-lg whitespace-pre-line">
                e-mail :{" "}
                <a
                  href="mailto:onechest48@gmail.com"
                  className="underline hover:text-OneChestRed transition-colors"
                >
                  onechest48@gmail.com
                </a>
                {"\n"}
                WhatsApp :{" "}
                <a
                  href="https://wa.me/33789243498"
                  className="underline hover:text-OneChestRed transition-colors"
                >
                  (+33) 7 89 24 34 98
                </a>
              </p>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-OneChestBlack">
                FORMULAIRE DE CONTACT
              </h2>
              <ContactForm />
            </div>
          </div>
          {/* Image 2/3, border-radius 2xl, visible only md+ */}
          <div className="hidden p-20 md:flex w-2/3 justify-center relative rounded-2xl overflow-hidden">
            <Image
              src={contactSection.image}
              alt="Illustration contact"
              height={600}
              width={600}
              className="hidden sm:flex object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
