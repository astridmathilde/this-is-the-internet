/* The layers of the Internet */ 
const surfaceWeb = document.getElementById("surface-web").getElementsByTagName("p")[0];
const surfaceWebImg = document.getElementById("surface-web").getElementsByTagName("figure")[0];
const deepWeb = document.getElementById("deep-web").getElementsByTagName("p")[0];
const deepWebImg = document.getElementById("deep-web").getElementsByTagName("figure")[0]
const darkWeb = document.getElementById("dark-web").getElementsByTagName("p")[0];
const darkWebImg = document.getElementById("dark-web").getElementsByTagName("figure")[0];

/* Function to add class on element when scrolling into view */
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Check if you have reached the element
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }  else {
      entry.target.classList.remove("visible");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1
}

const observer = new IntersectionObserver(callback, options);

/* The layers of the Internet */ 
observer.observe(surfaceWeb);
observer.observe(surfaceWebImg);
observer.observe(deepWebImg);
observer.observe(darkWeb);
observer.observe(darkWebImg);