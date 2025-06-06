
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});
