import Typed from 'typed.js';

document.getElementById("slogan-typed").innerHTML = '';

var options = {
  strings: [
    " interfaces",
    " websites",
    " applications",
    " user experience",
    " digital products"
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 0,
  loop: true,
  smartBackspace: true,
  showCursor: false,
}

var typed = new Typed("#slogan-typed", options);