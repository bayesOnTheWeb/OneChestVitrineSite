import { NextRequest, NextResponse } from "next/server";
import { UserDTO } from "../../backendComponent/model/User";
import { ParseInput } from "../../backendComponent/security/validationInput";
import { sendForm } from "../../backendComponent/services/sendMail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation des données utilisateur
    const parsedFormData = await ParseInput(body);

    if (!parsedFormData.success) {
      return NextResponse.json(
        {
          message: "Erreur lors de la validation des données utilisateur",
          errors: parsedFormData.errors,
        },
        { status: 400 },
      );
    }

    // Envoi du mail avec les données validées
    await sendForm(parsedFormData.data as UserDTO);

    return NextResponse.json(
      { message: "Mail envoyé avec succès !" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur API POST /contact:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du mail", error },
      { status: 500 },
    );
  }
}
