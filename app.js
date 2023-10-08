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
