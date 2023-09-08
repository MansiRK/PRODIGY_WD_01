document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Set the "Home" tab as active by default
  const homeTab = document.querySelector('a[href="#home"]');
  homeTab.classList.add("active");
});
