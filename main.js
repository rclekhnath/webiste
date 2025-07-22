// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Load Header and Footer
    loadComponents();
    
    // Initialize other scripts
    initStickyHeader();
    initSmoothScrolling();
    initBackToTop();
    initCurrentYear();
    initActiveNav();
});

function loadComponents() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = data;
            }
        });

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = data;
                // Re-initialize footer-specific scripts
                initCurrentYear();
                initBackToTop();
            }
        });
}



function initStickyHeader() {
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        // @ts-ignore
        yearElement.textContent = new Date().getFullYear();
    }
}

function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(n) {
        // Wrap around if at end
        currentSlide = (n + slides.length) % slides.length;
        
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideShow();
        });
    });
    
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 4000);
    }
    
    // Start the slideshow
    startSlideShow();
});



// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // @ts-ignore
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});




// Annual Calendar Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show current month by default
    const currentMonth = new Date().getMonth();
    showMonth(currentMonth);
    
    // Month selector buttons
    const monthButtons = document.querySelectorAll('.month-selector button');
    monthButtons.forEach(button => {
        button.addEventListener('click', function() {
            monthButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const month = parseInt(this.getAttribute('data-month'));
            showMonth(month);
        });
    });
    
    // Previous/Next year buttons
    document.querySelector('.prev-year').addEventListener('click', function() {
        // In a real implementation, this would load the previous year's calendar
        alert('Loading previous year calendar would go here');
    });
    
    document.querySelector('.next-year').addEventListener('click', function() {
        // In a real implementation, this would load the next year's calendar
        alert('Loading next year calendar would go here');
    });
});

function showMonth(monthIndex) {
    const monthCalendars = document.querySelectorAll('.month-calendar');
    monthCalendars.forEach(calendar => {
        calendar.classList.remove('active');
        // @ts-ignore
        if (parseInt(calendar.getAttribute('data-month')) === monthIndex) {
            calendar.classList.add('active');
        }
    });
}