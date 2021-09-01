document.onload(headerAnim());

function gsapTest() {
  gsap.to("#test", { opacity: 0, duration: 1, x: "-100vw", ease: "power2.in" });
}

function headerAnim() {
  gsap.to("#h-white", {
    rotateY: 360,
    duration: 10,
    repeat: -1,
  });

  gsap.to("#h-red", {
    rotateY: 360,
    duration: 11,
    repeat: -1,
  });

  gsap.to("#h-green", {
    rotateY: 360,
    duration: 15,
    repeat: -1,
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
}
