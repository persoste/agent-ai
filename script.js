
// Sticky Navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SplitText animato nella Hero
const headline = document.querySelector(".split-headline");
if (headline) {
  const text = headline.textContent.trim();
  headline.innerHTML = "";
  text.split("").forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.opacity = 0;
    span.style.transform = "translateY(30px)";
    headline.appendChild(span);
  });

  gsap.to(".split-headline span", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.04,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
}

// Parallax Hero (se presente .parallax-bg)
gsap.to(".parallax-bg", {
  y: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
