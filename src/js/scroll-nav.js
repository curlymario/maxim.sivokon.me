var collapsible = ["main_title", "main_navbar", "main_contacts", "main_lang"];
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  window.setTimeout(function() {
    for (var i in collapsible) {
      this.console.log(collapsible[i])
      var element = document.getElementById(collapsible[i]); // ненавижу блядь джаваскрипт
      if (prevScrollpos > currentScrollPos && prevScrollpos - currentScrollPos > 15.0) {
        element.classList.remove('is-collapsed');
      } else if (prevScrollpos < currentScrollPos && currentScrollPos - prevScrollpos > 15.0) {
        element.classList.add('is-collapsed');
      }
    };
    prevScrollpos = currentScrollPos;
  }, 200)
};