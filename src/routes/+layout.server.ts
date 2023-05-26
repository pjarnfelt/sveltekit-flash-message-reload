import type { LayoutServerLoad } from "./$types"
import { loadFlashMessage } from "sveltekit-flash-message/server"

export const load = loadFlashMessage(async () => {
  return {}
}) satisfies LayoutServerLoad
