const first = document.getElementById("scrolling-txt")
const second = document.getElementById("scrolling-txt2")
const third = document.getElementById("scrolling-txt3")
const container = document.getElementById("container")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
    element.style.transform = `translateX(${position}px)`
} 

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
      
     window.requestAnimationFrame(function() {
       
        animate(first,lastKnownScrollPosition*-.9)
        animate(third,lastKnownScrollPosition -2900 *.9)
        if (lastKnownScrollPosition<1100){
        animate(second,(lastKnownScrollPosition-1100)*.9)}
      });
});