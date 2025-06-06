
AOS.init();

// Animazione solo in entrata per Hero (senza ScrollTrigger)
gsap.from(".hero", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power3.out"
});

// Le altre sezioni hanno animazioni in entrata/uscita
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".section:not(.hero)").forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 100 }, 
    {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    });
});

// Accordion FAQ
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
