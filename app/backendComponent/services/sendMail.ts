import { UserDTO } from "../model/User";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "steevn.pyram@gmail.com",
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function sendForm(user: UserDTO): Promise<void> {
  const message = {
    from: user.email,
    to: "Neauclemet@gmail.com",
    subject: `Formulaire de contact ${user.firstname} ${user.lastname}`,
    text: `${user.message} ${user.email}`,
    html: `<p>${user.message} ${user.email}</p>`,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("Email envoyé :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    throw new Error("Impossible d'envoyer le mail");
  }
}
