const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY === 0) {
      current = "home";
    } else if (
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight - 100
    ) {
      current = "contact";
    }
    if (scrollY >= sectionTop - 0) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
