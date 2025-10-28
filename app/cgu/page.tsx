import CallToAction from "../frontendComponent/server/CallToAction";
import NavBarSecond from "../frontendComponent/server/NavbarSecond";

export default function CGUSection() {
  const cguData = [
    {
      id: 1,
      title: "1. Préambule",
      content: `Les présentes Conditions Générales d’Utilisation (CGU) régissent l’accès et l’utilisation du site OneChest, un site vitrine proposant un formulaire de contact pour la gestion des demandes de sessions de coaching.

L’utilisateur reconnaît avoir pris connaissance des présentes CGU et s’engage à les respecter.

Éditeur / Responsable légal : Clément Thepot
Nature du service : Site vitrine
URL : Non disponible`,
    },
    {
      id: 2,
      title: "2. Accès au service et public cible",
      content: `- L’accès au site est réservé aux personnes majeures (18 ans et plus).
- L’inscription n’est pas obligatoire pour utiliser le site.
- L’utilisateur peut envoyer un mail via le formulaire de contact en fournissant :
    - Nom et prénom
    - Adresse e-mail
    - Message
- Les messages envoyés **ne sont pas stockés dans une base de données**, mais peuvent être conservés par le propriétaire pour une durée maximale de **2 ans** afin de gérer les demandes de coaching.`,
    },
    {
      id: 3,
      title: "3. Fonctionnalités",
      content: `- Envoi de mails via le formulaire de contact.
- Gestion interne des demandes par le propriétaire du site.
- Aucun contenu n’est publié par les utilisateurs.`,
    },
    {
      id: 4,
      title: "4. Propriété intellectuelle",
      content: `- L’ensemble des contenus présents sur le site (textes, images, logos, etc.) est la **propriété exclusive de OneChest ou de ses partenaires**.
- Toute reproduction, représentation ou exploitation du contenu du site est **strictement interdite** sans autorisation préalable.`,
    },
    {
      id: 5,
      title: "5. Données personnelles et confidentialité",
      content: `- Les données collectées via le formulaire de contact sont : **nom, prénom, adresse e-mail et contenu du message**.
- Les données sont **conservées uniquement pour la durée nécessaire** à la gestion des demandes, soit **2 ans maximum**.
- Les informations sont utilisées **exclusivement par le propriétaire du site** pour répondre aux demandes des utilisateurs.
- Conformément au **RGPD**, l’utilisateur peut exercer ses droits : accès, rectification et suppression de ses données en contactant le propriétaire.`,
    },
    {
      id: 6,
      title: "6. Responsabilités",
      content: `- L’utilisateur **consent à la conservation et à l’utilisation de ses données** conformément à l’article 5.
- OneChest ne peut être tenue responsable des :
    - Interruptions de service ou maintenance du site
    - Perte ou destruction des messages envoyés par le formulaire`,
    },
    {
      id: 7,
      title: "7. Compte utilisateur",
      content: `- Aucun compte utilisateur n’est nécessaire pour utiliser le site.
- Les utilisateurs ne peuvent donc pas supprimer de compte, mais peuvent demander la suppression de leurs données personnelles à tout moment (cf. article 5).`,
    },
    {
      id: 8,
      title: "8. Conditions de résiliation / suspension",
      content: `- Le site peut être temporairement inaccessible pour maintenance ou mises à jour, sans préavis.
- L’utilisateur peut stopper l’utilisation du site à tout moment.`,
    },
    {
      id: 9,
      title: "9. Droit applicable et règlement des litiges",
      content: `- Les présentes CGU sont régies par **le droit français**.
- En cas de litige, l’utilisateur et le propriétaire s’engagent à rechercher une **solution amiable via médiation** avant toute action judiciaire.`,
    },
    {
      id: 10,
      title: "10. Acceptation des CGU",
      content: `En utilisant le site **OneChest**, l’utilisateur reconnaît avoir lu et accepté les présentes CGU, y compris la politique de confidentialité intégrée.`,
    },
  ];

  return (
    <>
      <NavBarSecond />

      <main className="flex flex-col pt-60 sm:pt-28 md:pt-40 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-12 max-w-5xl mx-auto text-OneChestBlack">
        {/* Header */}
        <header className="flex flex-col gap-2 sm:gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Conditions Générales d’Utilisation
          </h1>
          <p className="text-gray-500 italic text-xs sm:text-sm md:text-base">
            Dernière mise à jour : 15 octobre 2025
          </p>
        </header>

        {/* CGU sections */}
        <section className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {cguData.map((rule) => (
            <article
              key={rule.id}
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 border-b border-gray-200 pb-4 sm:pb-5 md:pb-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-OneChestBlack">
                {rule.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base md:text-lg">
                {rule.content}
              </p>
            </article>
          ))}
        </section>

        {/* Call to action */}
        <div className="flex justify-center py-10 mt-6 sm:mt-8 md:mt-10">
          <CallToAction label="Retourner à la page d'accueil" redirect="/" />
        </div>
      </main>
    </>
  );
}
