// Toggle Menu

let navMenu = document.getElementById("nav-menu");
let toggleMenu = document.getElementById("toggleMenu");

toggleMenu.addEventListener("click", function () {
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
    toggleMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    navMenu.style.display = "none";
    toggleMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Animation on scroll

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      } else {
        entry.target.classList.remove("fade-in-visible");
      }
    });
  });

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    observer.observe(element);
  });
});

// Backdrop on hover
// let dropDowns = document.getElementsByClassName("dropdown-btn");
// let body = document.getElementById("body");

// dropDowns.addEventListener("mouseenter", () => {
//   body.classList.add("darkened");
// });

// dropDowns.addEventListener("mouseleave", () => {
//   body.classList.remove("darkened");
// });

// Type 2
// for (let i = 0; i < dropDowns.length; i++) {
//   dropDowns[i].addEventListener("mouseenter", () => {
//     body.classList.add("darkened");
//   });

//   dropDowns[i].addEventListener("mouseleave", () => {
//     body.classList.remove("darkened");
//   });
// }
