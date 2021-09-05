document.onload(headerAnim());

function gsapTest() {
  gsap.to("#test", { opacity: 0, duration: 1, x: "-100vw", ease: "power2.in" });
}

function headerAnim() {
  gsap.from("#h-white", {
    rotateY: 360,
    duration: 10,
    yoyo: true,
  });

  gsap.to("#h-red", {
    rotateY: 360,
    duration: 11,
    repeat: -1,
  });

  gsap.from("#h-green", {
    rotateY: 360,
    duration: 14,
    yoyo: true,
  });

  gsap.to("#h-blue", {
    rotateY: 360,
    duration: 20,
    repeat: -1,
  });

  gsap.fromTo(
    "h1",
    {
      opacity: 0,
    },
    { opacity: 1, duration: 2 }
  );
  scroller();
}

function scroller() {
  let face = document.querySelector("#face");
  let grid = document.querySelector("#grid");
  gsap.to("#face", {
    src: "./assets/img/frown.png",

    scrollTrigger: {
      trigger: "#face",

      toggleActions: "play none none reset",
      start: "top",
      end: "1000px",
      scrub: true,
      markers: true,
    },
  });

  gsap.to("#grid", {
    src: "./assets/img/grid-dot-out.png",
    scrollTrigger: {
      trigger: "#grid",
      toggleActions: "play none none reset",
      start: "top",
      end: "1000px",
      scrub: true,
      markers: true,
    },
  });
}
