
AOS.init();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hide');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.section').forEach(el => {
  el.classList.add('hide');
  observer.observe(el);
});
