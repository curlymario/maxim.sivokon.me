import Typed from 'typed.js';

document.getElementById("slogan-typed").innerHTML = '';

var options = {
  strings: [
    " интерфейсы",
    " веб-сайты",
    " приложения",
    " пользовательский опыт",
    " цифровые продукты"
  ],
  typeSpeed: 120,
  backSpeed: 60,
  backDelay: 3500,
  startDelay: 1500,
  loop: true,
  smartBackspace: true,
  showCursor: false,
}

var typed = new Typed("#slogan-typed", options);