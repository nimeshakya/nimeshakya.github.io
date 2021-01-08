const navbar = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 150) {
    navbar.classList.add('active');
    navbar.classList.remove('navbar');
  } else {
    navbar.classList.remove('active');
    navbar.classList.add('navbar');
  }
};
