document.querySelector('.down-arrow-container')?.addEventListener('click', function () {
    const targetElement = document.getElementById('plot-section');

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});