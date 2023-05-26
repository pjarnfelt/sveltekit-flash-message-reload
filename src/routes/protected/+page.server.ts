import type { Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import { redirect } from "sveltekit-flash-message/server"

export const load: PageServerLoad = async (event) => {
  const message = {
    type: "success",
    message: "Endpoint POST successful!",
  } as const
  throw redirect(303, "/", message, event)
  return {}
}

export const actions: Actions = {
  default: async (event) => {},
}
