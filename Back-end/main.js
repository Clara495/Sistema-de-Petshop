const $navbarCollapse = document.querySelector("#collapse");
const $navbarCollapseUl = document.querySelector(".offcanvas-body ul");
const btnlg = `<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#loginSignUp">Acessar</button>`;
let responseWindow = () => {
  let widht = window.innerWidth;
  const btnQuantity = document.querySelectorAll(".btn-lg");
  const arrayBtns = Array.from(btnQuantity);
  arrayBtns.forEach((btn, index) => {
    if (widht > 992) {
      if (index == 0) {
        btn.remove();
      }
    } else {
      if (index == 0) {
        btn.remove();
      }
    }
  });
  if (widht > 992) {
    $navbarCollapse.insertAdjacentHTML("afterend", btnlg);
  } else {
    $navbarCollapseUl.insertAdjacentHTML("beforebegin", btnlg);
  }
};

window.addEventListener("resize", () => responseWindow());
window.addEventListener("DOMContentLoaded", () => responseWindow());
window.addEventListener("scroll", () => stickyNavbar());

let stickyNavbar = () => {
  const nav = document.querySelector(".navbar");
  let height = window.scrollY;
  if (height > 0) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
};

// Swiper Start
var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
// Swiper End