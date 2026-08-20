"use client";

import confetti from "canvas-confetti";

export function triggerBirthdayFireworks() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ["#ff7675", "#fdcb6e", "#e84393", "#6c5ce7"],
  });
  fire(0.2, {
    spread: 60,
    colors: ["#ffeaa7", "#fab1a0", "#ff7675", "#fd79a8"],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ["#fdcb6e", "#00cec9", "#0984e3", "#6c5ce7"],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ["#ff9ff3", "#feca57", "#ff6b6b", "#48dbfb"],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ["#fdcb6e", "#e17055", "#d63031"],
  });
}

export function triggerHeartRain() {
  const scalar = 2;
  const heart = confetti.shapeFromPath({
    path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
  });

  confetti({
    shapes: [heart],
    scalar,
    particleCount: 40,
    spread: 100,
    origin: { y: 0.6 },
    colors: ["#ff7675", "#fd79a8", "#e84393", "#fab1a0"],
  });
}
