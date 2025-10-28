"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Formulaire envoyé avec succès");
        setFormData({ lastname: "", firstname: "", email: "", message: "" });
      } else {
        setMessage("Formulaire non soumis");
      }
    } catch (err) {
      console.error("Erreur réseau", err);
    }
  };

  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 md:gap-6"
      >
        {/* Nom & Prénom */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="w-full">
            <label
              htmlFor="lastname"
              className="block mb-1 font-semibold text-sm sm:text-base"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border-b border-b-OneChestBlack px-3 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="firstname"
              className="block mb-1 font-semibold text-sm sm:text-base"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border-b border-b-OneChestBlack px-3 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-sm sm:text-base"
          >
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-b-OneChestBlack px-3 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-semibold text-sm sm:text-base"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-b-OneChestBlack px-3 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 sm:py-2.5 px-4 bg-OneChestBlack rounded-tr-2xl rounded-bl-2xl text-OneChestWhite hover:opacity-80 transition flex w-1/3 justify-center "
          >
            Envoyer
          </button>
        </div>

        {/* Message */}
        {message && (
          <div>
            <p className="p-4 sm:p-5 md:p-6 bg-OneChestBlack border-OneChestRed text-OneChestWhite rounded-2xl">
              {message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
