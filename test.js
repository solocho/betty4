let indexMap = {
    "b-2-l-u": 0,
    "b-2-l-l": 0,
    "b-2-r": 0
};

let autoScrollIntervals = {}; // Store auto-scroll intervals

function showSlides(containerId) {
    let container = document.querySelector(`.${containerId} .slide-container`);
    let totalSlides = container.children.length;
    let dots = document.getElementById(`dots-${containerId}`).children;

    // Move the slides
    container.style.transform = `translateX(${-indexMap[containerId] * 100 / totalSlides}%)`;

    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[indexMap[containerId]].classList.add("active");
}

function nextSlide(containerId) {
    let totalSlides = document.querySelector(`.${containerId} .slide-container`).children.length;
    indexMap[containerId] = (indexMap[containerId] + 1) % totalSlides;
    showSlides(containerId);
    resetAutoScroll(containerId); // Reset auto-scroll when user interacts
}

function prevSlide(containerId) {
    let totalSlides = document.querySelector(`.${containerId} .slide-container`).children.length;
    indexMap[containerId] = (indexMap[containerId] - 1 + totalSlides) % totalSlides;
    showSlides(containerId);
    resetAutoScroll(containerId); // Reset auto-scroll when user interacts
}

function createDots(containerId) {
    let totalSlides = document.querySelector(`.${containerId} .slide-container`).children.length;
    let dotsContainer = document.getElementById(`dots-${containerId}`);
    dotsContainer.innerHTML = ""; 

    for (let i = 0; i < totalSlides; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dot.onclick = function() {
            indexMap[containerId] = i;
            showSlides(containerId);
            resetAutoScroll(containerId); // Reset auto-scroll when user interacts
        };
        dotsContainer.appendChild(dot);
    }
}

// Auto-scroll function
function startAutoScroll(containerId) {
    stopAutoScroll(containerId); // Clear existing interval
    autoScrollIntervals[containerId] = setInterval(() => {
        nextSlide(containerId);
    }, 3000); // Auto-scroll every 3 seconds
}

// Stop auto-scroll (when user interacts)
function stopAutoScroll(containerId) {
    clearInterval(autoScrollIntervals[containerId]);
}

// Reset auto-scroll (when user interacts)
function resetAutoScroll(containerId) {
    stopAutoScroll(containerId);
    startAutoScroll(containerId);
}

// Initialize sliders
document.addEventListener("DOMContentLoaded", () => {
    ["b-2-l-u", "b-2-l-l", "b-2-r"].forEach(containerId => {
        createDots(containerId);
        showSlides(containerId);
        startAutoScroll(containerId);
    });
});
