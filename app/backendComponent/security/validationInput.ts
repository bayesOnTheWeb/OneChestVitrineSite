import * as z from "zod";
import { UserDTO } from "../model/User";

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function ParseInput(User: UserDTO) {
  try {
    const result = schema.safeParse(User);

    if (!result.success) {
      return {
        success: false,
        errors: result.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      };
    }
    return {
      success: true,
      data: result.data,
    };
  } catch (_error) {
    throw new Error("Erreur lors de la validation utilisateur");
  }
}
