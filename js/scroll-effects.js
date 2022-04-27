const theDarkWebIsScary = document.getElementById("the-dark-web-is-scary"); 
const theDarkWebIsScary_height = theDarkWebIsScary.offsetHeight;


/* Trigger scroll effect function */ 
window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if( scrollPosition >= theDarkWebIsScary_height ) {
    theDarkWebIsScary.classList.add("visible"); 
  } else {
    theDarkWebIsScary.classList.remove("visible"); 
  }
  console.log(scrollPosition);
});