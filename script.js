
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

// Sticky Navbar animata
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Split Text effetto
const headline = document.querySelector(".split-headline");
if (headline) {
  const splitText = headline.textContent.split("");
  headline.innerHTML = "";
  splitText.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    headline.appendChild(span);
  });

  gsap.to(".split-headline span", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%"
    }
  });
}
