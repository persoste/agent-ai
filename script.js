
// Split Text potenziato
const headline = document.querySelector(".split-text");
if (headline) {
  const text = headline.textContent;
  headline.innerHTML = "";
  [...text].forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.opacity = 0;
    span.style.transform = "translateY(100px) rotate(10deg)";
    headline.appendChild(span);
  });

  gsap.to(".split-text span", {
    opacity: 1,
    y: 0,
    rotate: 0,
    duration: 1.2,
    stagger: 0.06,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: headline,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
}

// Parallax effect
gsap.to(".hero", {
  backgroundPositionY: "20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Navbar scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
