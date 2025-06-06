
// Sticky Navbar
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Split Text
const headline = document.querySelector(".split-headline");
if (headline) {
  const splitText = headline.textContent.split("");
  headline.innerHTML = "";
  splitText.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    headline.appendChild(span);
  });

  gsap.to(".split-headline span", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 80%"
    }
  });
}

// Parallax
gsap.to(".parallax-bg", {
  y: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
