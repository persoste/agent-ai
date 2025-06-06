
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".section", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    overwrite: true
  }),
  onLeave: batch => gsap.to(batch, {
    opacity: 0,
    y: -50,
    duration: 0.6,
    stagger: 0.1,
    overwrite: true
  }),
  onEnterBack: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    overwrite: true
  }),
  onLeaveBack: batch => gsap.to(batch, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.1,
    overwrite: true
  }),
  start: "top 80%",
  end: "bottom 20%",
  markers: false
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
