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
    
    // Product data (with all images maintained)
    const products = [
        {
            id: 1,
            title: "Urban Classic Hoodie",
            price: 700,
            oldPrice: 900,
            discount: 29,
            image: "images/hoodie/men/h2.png",
            category: "men",
            rating: 4,
            description: "Classic urban style hoodie with premium cotton blend for ultimate comfort."
        },
        {
            id: 2,
            title: "Pastel Dream Hoodie",
            price: 500,
            oldPrice: 600,
            discount: 15,
            image: "images/hoodie/women/h3.png",
            category: "women",
            rating: 5,
            description: "Soft pastel hoodie with oversized fit for a cozy and stylish look."
        },
        {
            id: 3,
            title: "Graphic Print Hoodie",
            price: 800,
            image: "images/hoodie/men/h4.png",
            category: "unisex",
            rating: 4,
            description: "Bold graphic print hoodie that makes a statement wherever you go."
        },
        {
            id: 4,
            title: "Athletic Fit Hoodie",
            price: 400,
            oldPrice: 500,
            discount: 25,
            image: "images/hoodie/men/h5.png",
            category: "men",
            rating: 4.5,
            description: "Performance hoodie designed for both workouts and casual wear."
        },
        {
            id: 5,
            title: "Oversized Comfort Hoodie",
            price: 800,
            image: "images/hoodie/men/h6.png",
            category: "women",
            rating: 5,
            description: "Ultra-comfy oversized hoodie perfect for lounging or layering."
        },
        {
            id: 6,
            title: "Vintage Wash Hoodie",
            price: 400,
            oldPrice: 500,
            discount: 20,
            image: "images/hoodie/men/h7.png",
            category: "unisex",
            rating: 4,
            description: "Vintage-inspired hoodie with distressed details for a retro vibe."
        },
        {
            id: 7,
            title: "Fleece-Lined Hoodie",
            price: 600,
            image: "images/hoodie/men/h8.png",
            category: "men",
            rating: 4.5,
            description: "Extra warm fleece-lined hoodie for chilly days and nights."
        },
        {
            id: 8,
            title: "Cropped Hoodie",
            price: 600,
            oldPrice: 850,
            discount: 23,
            image: "images/hoodie/men/h9.png",
            category: "men",
            rating: 4,
            description: "Trendy cropped hoodie that pairs perfectly with high-waisted bottoms."
        }
    ];
    
    // Display products
    const productsContainer = document.getElementById('products-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let visibleProducts = 8;
    let allProducts = [...products];
    
    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        
        productsToDisplay.slice(0, visibleProducts).forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-id', product.id);
            
            let discountBadge = '';
            if (product.discount) {
                discountBadge = `<div class="product-badge">${product.discount}% OFF</div>`;
            }
            
            let oldPrice = '';
            if (product.oldPrice) {
                oldPrice = `<span class="old-price">ksh${product.oldPrice.toFixed(2)}</span>`;
            }
            
            let ratingStars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(product.rating)) {
                    ratingStars += '<i class="fas fa-star"></i>';
                } else if (i === Math.ceil(product.rating) && !Number.isInteger(product.rating)) {
                    ratingStars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    ratingStars += '<i class="far fa-star"></i>';
                }
            }
            
            productCard.innerHTML = 
                `${discountBadge}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="action-btn quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                        <button class="action-btn add-to-wishlist wishlist-btn" data-id="${product.id}"><i class="far fa-heart"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">ksh${product.price.toFixed(2)}</span>
                        ${oldPrice}
                    </div>
                    <div class="product-rating">
                        ${ratingStars}
                        <span>(${Math.floor(Math.random() * 50) + 10})</span>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>`;
            
            productsContainer.appendChild(productCard);
        });
        
        loadMoreBtn.style.display = visibleProducts >= productsToDisplay.length ? 'none' : 'block';
        initProductButtons();
    }
    
    // Initialize product buttons (including view button functionality)
    function initProductButtons() {
        // Quick view buttons
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                if (product) {
                    openQuickView(product);
                }
            });
        });
        
        // ... (rest of your button initialization code)
    }
    
    // Modal functionality
    const modal = document.getElementById('quick-view-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.close-modal');
    
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
        
        // Reset selections
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('product-quantity').value = 1;
        document.querySelector('.size-error').style.display = 'none';
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);
    
    // ... (rest of your existing functionality)
    
    // Initialize everything
    displayProducts(products);
});
