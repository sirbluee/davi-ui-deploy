"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      className="absolute w-full h-full z-0"
      id={props.id}
      options={{
        fullScreen: false,
        background: {},
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab", // Changed to repulse for more interaction
            },
            resize: {
              enable: true,
              delay: 0.5,
            },
          },
          modes: {
            push: {
              quantity: 8, // More particles when clicking
            },
            repulse: {
              distance: 200, // Increased distance for stronger repulse effect
              duration: 0.4,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#A4FFFF",
          },
          links: {
            color: "#ABB7E3",
            distance: 120, // Slightly larger distance between links
            enable: true,
            opacity: 0.6, // Slightly more visible links
            width: 1, // Thicker lines between particles
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "right", // Particles move left to right
            enable: true,
            outModes: {
              default: "out", // Ensures particles leave the screen instead of bouncing back
            },
            random: false,
            speed: 2, // Slightly faster for more movement
            straight: true, // Straight movement for more controlled effect
          },
          number: {
            density: {
              enable: true,
              width: 1200, // Corrected property name (width instead of area)
            },
            value: 40, // Increased number of particles for more density
          },
          opacity: {
            value: 0.5, // More opaque particles
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1.5, max: 3.5 }, // Larger particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
