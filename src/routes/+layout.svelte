<script lang="ts">
  import { initFlash } from "sveltekit-flash-message/client"
  import { page } from "$app/stores"
  import { beforeNavigate } from "$app/navigation"

  const flash = initFlash(page)
  beforeNavigate((nav) => {
    if ($flash && nav.from?.url.toString() != nav.to?.url.toString()) {
      $flash = undefined
    }
  })
</script>

{#if $flash}
  {@const bg = $flash.type == "success" ? "#3D9970" : "#FF4136"}
  <div style:background-color={bg} class="flash">{$flash.message}</div>
{/if}
<slot />
