/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

  });

});


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.12
  }

);


document.querySelectorAll(".reveal").forEach(element => {

  observer.observe(element);

});


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* ================= CLOSE MENU WITH ESC ================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

  }

});
