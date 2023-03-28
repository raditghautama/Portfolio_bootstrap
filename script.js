// Navbar Active
let section = document.querySelectorAll('section');
let navbar = document.querySelectorAll('nav div a');

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navbar.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('nav div a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};