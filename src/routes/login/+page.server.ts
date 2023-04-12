import { redirect, type Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma"
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  createUser: async ({ request }) => {
    const { name, email } = Object.fromEntries(await request.formData()) as { name: string, email: string }

    try {
      await prisma.users.create({
        data: {
          name,
          email
        }
      })
    } catch (err) {
      console.error(err)
      return fail(501, { message: "Error while creating the user." })
    }

    throw redirect(301, "/users")
  }
}
