
gsap.registerPlugin(ScrollTrigger);

// SplitText animation demo (testo principale)
gsap.from(".split-text", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.2
});

// Sezioni animate in scroll
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out"
  });
});
