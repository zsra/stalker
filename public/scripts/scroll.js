const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;
let isScrolling = false;

// Function to scroll to the specified section smoothly
function scrollToSection(sectionIndex) {
    const targetPosition = sections[sectionIndex].offsetTop;
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const duration = 1000; // Adjust this time for smoother/faster scrolling
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

// Add an event listener to handle wheel scrolling
window.addEventListener("wheel", function(event) {
    if (isScrolling) return;
    isScrolling = true;
    if (event.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    } else if (event.deltaY < 0) {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }

    // Reset scrolling flag after a short delay
    setTimeout(function() {
        isScrolling = false;
    }, 1500); // Adjust this time to prevent rapid scrolling
});