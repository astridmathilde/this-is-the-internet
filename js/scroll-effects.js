const theDarkWebIsScary = document.querySelector("#the-dark-web-is-scary");

/* Function to add class on element when scrolling into view */
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Check if you have reached the element
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // add more elements to observe here
    } else {
      entry.target.classList.remove("visible");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25
}

const observer = new IntersectionObserver(callback, options);

observer.observe(theDarkWebIsScary);
// add more elements to observe here