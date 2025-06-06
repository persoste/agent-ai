
gsap.registerPlugin(ScrollTrigger);

// Hero: animazione solo all'ingresso
gsap.from(".hero .title", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});
gsap.from(".hero .subtitle", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});
gsap.from(".hero .cta-button", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power3.out"
});

// Tutte le altre sezioni animate in entrata con ScrollTrigger
gsap.utils.toArray(".animate").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});
