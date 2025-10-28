import Image from "next/image";
import ContactForm from "../client/contactForm";
import Link from "next/link";

export default function ContactSection() {
  const textContact = {
    title: "ME CONTACTER",
    content: `Tu as envie de travailler avec moi ? 
Remplis le formulaire de contact 
et je te contacterai rapidement, 
n’hésite pas !`,
  };

  const icons = [
    {
      id: 1,
      title: "logo instagram",
      image: "/instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      title: "logo tiktok",
      image: "/tiktok.svg",
      link: "https://www.tiktok.com/fr/",
    },
    {
      id: 3,
      title: "logo youtube",
      image: "/youtube.svg",
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-16 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
      {/* Texte + icônes */}
      <div className="flex flex-col gap-8 w-full md:w-1/2 text-OneChestBlack">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {textContact.title}
        </h2>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
          {textContact.content}
        </p>

        <div className="flex items-center gap-6 sm:gap-8 mt-2">
          {icons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-8 h-10 sm:w-12 sm:h-12 md:w-10 hover:scale-110 transition-transform duration-200 ease-in-out">
                <Image
                  src={icon.image}
                  alt={icon.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50px, 80px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Formulaire */}
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
}
