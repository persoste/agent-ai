
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section').forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      }
    }
  );
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
