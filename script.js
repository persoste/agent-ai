
gsap.registerPlugin(ScrollTrigger);

// Hero animazione singola in entrata
gsap.from(".hero", {
  opacity: 0,
  y: 80,
  duration: 1.3,
  ease: "power3.out"
});

// Sezioni con toggleClass per entrata/uscita fluida
document.querySelectorAll(".section:not(.hero)").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 85%",
    end: "top 10%",
    toggleClass: { targets: section, className: "is-visible" },
    markers: false
  });
});

// Accordion FAQ
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
