
gsap.registerPlugin(ScrollTrigger);

const headline = document.querySelector(".split-headline");
if (headline) {
  const text = headline.textContent;
  headline.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    headline.appendChild(span);
  });
  gsap.to(".split-headline span", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.03,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headline,
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
}

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
