// function for adding and removing active class based on scroll

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(
  ".navbar .navbar-nav .nav-item .nav-link"
);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      const correspondingNavlink = document.querySelector(
        ".navbar .navbar-nav .nav-item .nav-link[href='#" + id + "']"
      );
      if (correspondingNavlink) {
        correspondingNavlink.classList.add("active");
      }
    }
  });
};
