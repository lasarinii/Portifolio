import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";
import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = () => {
  return {
    users: prisma.users.findMany()
  };
};

export const actions: Actions = {
  deleteUser: async ({ url }) => {
    const id = url.searchParams.get('id')

    if (!id) {
      return fail(400, { message: 'Was not possible to delete the user.' })
    }

    try {
      await prisma.users.delete({
        where: {
          id: Number(id)
        }
      })
    } catch (err) {
      console.error(err)
      return fail(500, { message: 'Something went wrong while deleting the user.' })
    }

    return {
      status: 201
    }
  }
}
