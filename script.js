// Buy Now and Add to Cart Button Interactions
document.getElementById('buy-now').addEventListener('click', function() {
    alert('Thank you for your purchase!');
});

document.getElementById('add-to-cart').addEventListener('click', function() {
    alert('Item added to cart!');
});

// Thumbnail Image Click to Change Main Image
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});

// Countdown Timer
function updateCountdown() {
    const endTime = new Date(document.getElementById('timer').getAttribute('data-end-time'));
    const now = new Date();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        document.getElementById('timer').innerHTML = "Offer Expired";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

setInterval(updateCountdown, 1000);

// Scroll Animations on Sections
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});
