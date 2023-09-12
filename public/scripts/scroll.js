const sections = document.querySelectorAll("section");
const summary = document.querySelector('.summary-container');
const plot = document.querySelector('.plot');
const actors = document.querySelectorAll('.actor-effect');
let currentSectionIndex = 0;
let isScrolling = false;

function scrollToSection(sectionIndex) {
    const targetPosition = sections[sectionIndex].offsetTop;
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const duration = 1000;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        if (!isScrolling) return;

        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, currentPosition + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

window.addEventListener("wheel", function(event) {
    if (isScrolling) return;
    
    isScrolling = true;
   
    console.log(sections);
    
    if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;

        if (currentSectionIndex === 1) {
            addPlotAnimations();
        }
        else if (currentSectionIndex === 0 || currentSectionIndex === 2) {
            updatePlotAnimations();
        }

        if (currentSectionIndex === 2) {
            addCastAnimations();
        }
        else if (currentSectionIndex === 1 || currentSectionIndex === 3) {
            updateCastAnimations();
        }

        scrollToSection(currentSectionIndex);

    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;

        if (currentSectionIndex === 1) {
            addPlotAnimations();
        }
        else if (currentSectionIndex === 0 || currentSectionIndex === 2) {
            updatePlotAnimations();
        }

        if (currentSectionIndex === 2) {
            addCastAnimations();
        }
        else if (currentSectionIndex === 1 || currentSectionIndex === 3) {
            updateCastAnimations();
        }

        scrollToSection(currentSectionIndex);
    }

    setTimeout(function() {
        isScrolling = false;
    }, 1500);
});

document.querySelector('.down-arrow-container')?.addEventListener('click', function () {
    const targetElement = document.getElementById('plot-section');

    if (targetElement) {
        addPlotAnimations();

        currentSectionIndex++;

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
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

function addCastAnimations() {
    actors.forEach(a => a.style.animation = ' slideAndFade 2.5s ease forwards');
}

function updateCastAnimations() {
    actors.forEach(a => a.style.animation = ' slideAndFadeOut 2.5s ease forwards');
}