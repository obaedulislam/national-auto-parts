const navbar = document.querySelector(".nav-fixed");
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
