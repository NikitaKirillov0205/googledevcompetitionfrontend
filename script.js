const first = document.getElementById("scrolling-txt")
const second = document.getElementById("scrolling-txt2")
const container = document.getElementById("container")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
    element.style.transform = `translateX(${position}px)`
} 

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
      
     window.requestAnimationFrame(function() {
       
        animate(first,lastKnownScrollPosition*-.9)
        animate(second,(lastKnownScrollPosition-300)*.9)
      });
});