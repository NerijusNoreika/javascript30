const images = document.querySelectorAll('img');
const options = { 
    rootMargin: '0px',
    threshold: 1.0
};
const observer = new IntersectionObserver(imageHandler, options);
images.forEach(image => observer.observe(image));

function imageHandler(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    })
}
