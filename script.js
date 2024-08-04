const first = document.getElementById("scrolling-txt");
const second = document.getElementById("scrolling-txt2");
const third = document.getElementById("scrolling-txt3");
const container = document.getElementById("container");
const rect = container.getBoundingClientRect();

const animate = (element, position) => {
    element.style.transform = `translateX(${position}px)`;
};

document.addEventListener('scroll', function (e) {
    const lastKnownScrollPosition = window.scrollY;
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }

    window.requestAnimationFrame(function () {
        animate(first, lastKnownScrollPosition * -0.9);
        animate(third, lastKnownScrollPosition - 2900 * 0.9);
        if (lastKnownScrollPosition < 1100) {
            animate(second, (lastKnownScrollPosition - 1100) * 0.9);
        }
    });
});