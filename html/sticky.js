// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbarcenter");
var topimage = document.getElementById("imagehead");

// Get the offset position of the navbar
var sticky = topimage.offsetHeight - header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
function myFunction() {
  var scrollTop = window.pageYOffset;
  var parts = [23, 23, 33, scrollTop / 400]
  header.style.backgroundColor = `rgba(${ parts.join(',') })`;
}