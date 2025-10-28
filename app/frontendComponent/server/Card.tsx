import Image from "next/image";

type CardType = {
  picture: string;
  title: string;
  content: string;
};

export default function Card({ picture, title, content }: CardType) {
  return (
    <div className="flex flex-col pl-4 sm:pl-6 md:pl-12">
      {/* Image avec ombre portée et effet de survol */}
      <div className="flex flex-col w-auto gap-3 sm:gap-4 md:gap-6">
        <Image
          src={picture}
          alt={title}
          width={256}
          height={144}
          className="rounded-2xl self-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />

        {/* Titre */}
        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-center sm:text-left">
          {title}
        </h3>

        {/* Contenu */}
        <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base md:text-lg text-gray-700">
          {content}
        </p>
      </div>
    </div>
  );
}
