// Smoth scrolling to a section
const main = document.querySelector('.main');
const btnScroll = document.querySelector('.toTopBtn');
btnScroll.addEventListener('click', function (e) {
  main.scrollIntoView({ behavior: 'smooth' });
  // console.log(btnScrollTo, leftArrow);
});
