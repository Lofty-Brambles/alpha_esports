<script lang="ts">
  import { onMount } from "svelte"

  let canvas, mouse

  onMount(() => {
    const ctx = canvas.getContext("2d");
  })
</script>

<div class="backdrop" data-animation="fade 700 100">
  <canvas bind:this={canvas} bind:width bind:height ></canvas>
</div>