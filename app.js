//add active class across pages
document.addEventListener("DOMContentLoaded", function () {
  let currentPath = window.location.pathname;
  let navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  //add active class
  navLinks.forEach(function (link) {
    if (currentPath.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
//end of active class script
//toggle light and dark theme
let icon = document.querySelector(".dark-icon");
icon.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon-regular.svg";
  } else {
    icon.src = "images/sun-solid.svg";
  }
});
