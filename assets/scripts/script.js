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

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#face",
      toggleActions: "play none none none",
      start: "center center",
      end: "1000px",
      scrub: true,
      // markers: true,
    },
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#face",
      toggleActions: "play none none none",
      start: "center center",
      end: "800px",
      scrub: true,
      // markers: true,
    },
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#how-it-is",
      toggleActions: "play none none none",
      start: "bottom bottom",
      end: "800px",
      scrub: true,
      // markers: true,
    },
  });

  tl1.to("#face", {
    src: "./assets/img/frown.png",
    x: "-70vw",
  });

  tl2.to("#grid", {
    src: "./assets/img/grid-dot-out.png",
  });

  tl2.to("#grid", {
    src: "./assets/img/grid-dot-in.png",
  });

  tl1.to("#face", {
    src: "./assets/img/smile.png",
    width: "50%",
    x: "0",
  });

  tl1.to("#face", {
    opacity: 0,
  });

  tl2.to("#grid", {
    opacity: 0,
  });

  tl3.fromTo(
    "#how-it-is",
    {
      opacity: 0,
      x: "-10vw",
    },
    {
      opacity: 1,
      x: "90vw",
      fontSize: "10rem",
    }
  );
}
