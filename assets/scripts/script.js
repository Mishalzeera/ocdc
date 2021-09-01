document.onload(headerAnim());

function gsapTest() {
  gsap.to("#test", { opacity: 0, duration: 1, x: "-100vw", ease: "power2.in" });
}

function headerAnim() {
  gsap.to("#h-white", { opacity: 0.3, duration: 4 });
  gsap.to("#h-red", { opacity: 0.3, duration: 2 });
  gsap.to("#h-green", { opacity: 0.3, duration: 1 });
  gsap.to("#h-blue", { opacity: 0.3, duration: 3 });
}
