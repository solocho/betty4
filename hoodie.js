document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Change header style on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Product data
    const products = [
        // ... (keep your existing product data)
    ];
    
    // Modal functionality
    const modal = document.getElementById('quick-view-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.close-modal');
    
    // Function to open modal
    function openQuickView(product) {
        document.getElementById('modal-product-title').textContent = product.title;
        document.getElementById('modal-product-price').textContent = `ksh${product.price.toFixed(2)}`;
        
        if (product.oldPrice) {
            document.getElementById('modal-product-old-price').textContent = `ksh${product.oldPrice.toFixed(2)}`;
            document.getElementById('modal-product-discount').textContent = `${product.discount}% OFF`;
        } else {
            document.getElementById('modal-product-old-price').textContent = '';
            document.getElementById('modal-product-discount').textContent = '';
        }
        
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-main-image').src = product.image;
        
        // Open modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners for modal
    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);
    
    // Initialize product buttons (including view buttons)
    function initProductButtons() {
        // View buttons
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                if (product) {
                    openQuickView(product);
                }
            });
        });
        
        // ... (keep your other button initialization code)
    }
    
    // Display products function (make sure it calls initProductButtons)
    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        
        productsToDisplay.slice(0, visibleProducts).forEach(product => {
            // ... (keep your existing product card HTML)
            
            // Make sure your view button has the correct class and data-id:
            // <button class="quick-view" data-id="${product.id}">View</button>
        });
        
        // Initialize all product buttons including view buttons
        initProductButtons();
        
        // ... (rest of your displayProducts function)
    }
    
    // ... (keep the rest of your existing code)
    
    // Initialize everything when DOM loads
    displayProducts(products);
});
