
AOS.init();

document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".section").forEach(section => {
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
