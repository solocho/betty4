// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    this.classList.toggle('fa-times');
    this.classList.toggle('fa-bars');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('fa-times');
        document.querySelector('.hamburger').classList.add('fa-bars');
    });
});





// Cart toggle functionality
document.querySelector('.cart-icon').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.cart-sidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-cart').addEventListener('click', function() {
    document.querySelector('.cart-sidebar').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Wishlist toggle functionality
document.querySelector('.wishlist-icon').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.wishlist-sidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-wishlist').addEventListener('click', function() {
    document.querySelector('.wishlist-sidebar').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close sidebars when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.cart-sidebar') && !e.target.closest('.cart-icon')) {
        document.querySelector('.cart-sidebar').classList.remove('active');
    }
    if (!e.target.closest('.wishlist-sidebar') && !e.target.closest('.wishlist-icon')) {
        document.querySelector('.wishlist-sidebar').classList.remove('active');
    }
});