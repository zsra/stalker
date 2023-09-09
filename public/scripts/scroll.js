let isScrolling = false;
let framesToScroll = 30;
let scrollDirection = 0;
let prev = window.scrollY;
let animationRun = false;

let summary = document.querySelector('.summary-container');
let plot = document.querySelector('.plot');
let stalker = document.querySelector('.stalker');

function scrollToNextViewport() {
    if (framesToScroll > 0 && scrollDirection === -1) {
        const scrollStep = window.innerHeight / framesToScroll;
        window.scrollBy(0, scrollStep);
        framesToScroll--;
        if(animationRun) {
            addPlotAnimations();
            animationRun = false;
        }
        requestAnimationFrame(scrollToNextViewport);
    }
    else if (framesToScroll <= 30 && scrollDirection === 1) {
        const scrollStep = window.innerHeight / (31 - framesToScroll);
        window.scrollBy(0, -scrollStep);
        framesToScroll++;
        if(animationRun) {
            updatePlotAnimations();
            animationRun = false;
        }
        requestAnimationFrame(scrollToNextViewport);
    }
    else {
        isScrolling = false;
        removePlotAnimations();
    }
}

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        animationRun = true;
        scrollDirection = window.scrollY > prev ? -1 : 1;
        prev =  window.scrollY;
        scrollToNextViewport();
    }
});

function addPlotAnimations() {
    summary.style.animation = 'fadeInAnimation ease-in-out 2s';
    plot.style.animation =  'shrink 5s';
}

function updatePlotAnimations() {
    summary.style.animation = 'fadeOutAnimation ease-in-out 2s';
    plot.style.animation =  'scaleUp 5s';
}

function removePlotAnimations() {
    setTimeout(function() {
        summary.style.removeProperty('animation');  
        plot.style.removeProperty('animation');
        }, 5000);
}