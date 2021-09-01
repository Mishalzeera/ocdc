document.onload(headerAnim());

function gsapTest() {
  gsap.to("#test", { opacity: 0, duration: 1, x: "-100vw", ease: "power2.in" });
}

function headerAnim() {
  gsap.from("#h-white", {
    opacity: 0.3,
    duration: 2,
  });
  gsap.from("#h-red", { opacity: 0.3, duration: 2 });
  gsap.from("#h-green", { opacity: 0.3, duration: 1 });
  gsap.from("#h-blue", { opacity: 0.3, duration: 3 });

  gsap.to("h1", {
    x: "-20vw",
    duration: 7,
  });
}
