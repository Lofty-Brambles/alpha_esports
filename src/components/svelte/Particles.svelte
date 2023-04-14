<script lang="ts">
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  let particlesConfig = {
    particles: {
      color: {
        value: "#000",
      },
      links: {
        enable: true,
        color: "#000",
      },
      move: {
        enable: true,
      },
    },
  };

  let particlesInit = async (engine: Parameters<typeof loadFull>[0]) => {
    await loadFull(engine);
  };
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={(e) => e.detail.particles?.play()}
  {particlesInit}
/>
