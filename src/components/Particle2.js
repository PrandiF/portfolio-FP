import Particles from "react-tsparticles";
import React, { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Particle2 = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="particles-container"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000e25",
          },
        },
        fpsLimit: 60,
        background: {
          color: "#000e25",
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            // onHover: {
            //   enable: true,
            //   mode: "repulse",
            //   parallax: { enable: false, force: 60, smooth: 10 },
            // },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.05,
              sync: false, // Esto se cambia a false para que la animación se repita
            },
            value: {
              min: 0,
              max: 0.5,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default Particle2;
