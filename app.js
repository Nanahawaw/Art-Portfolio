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
document.addEventListener("DOMContentLoaded", function () {
  // On page load, check for the saved theme and icon in localStorage
  const savedTheme = localStorage.getItem("theme");
  const savedIcon = localStorage.getItem("icon");

  // Get the icon element
  let iconImg = document.querySelector(".dark-icon img");

  // Set the saved theme and icon
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    iconImg.src = savedIcon;
  }

  iconImg.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      iconImg.src = "images/moon-regular.svg";
      localStorage.setItem("theme", "light-theme");
      localStorage.setItem("icon", "images/moon-regular.svg");
    } else {
      iconImg.src = "images/sun-solid.svg";
      localStorage.removeItem("theme");
      localStorage.setItem("icon", "images/sun-solid.svg");
    }
  });
});
