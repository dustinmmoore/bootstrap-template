/**
 * Dean Herman Ministries - Bootstrap Template
 * Main JavaScript file based on the original deanhermanministries.com site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Handle mobile menu click
    initMobileMenu();
    
    // Initialize parallax effect
    initParallax();
    
    // Ensure gold link color
    ensureGoldLinks();

    // Initialize contact form
    initContactForm();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // If it's the home link, scroll to top
            if (targetId === '#') {
                // Update active state in the navbar BEFORE scrolling
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                    navLink.classList.remove('gold-color');
                });
                this.classList.add('active');
                this.classList.add('gold-color');
                
                // Then scroll
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Update URL without reload
                history.pushState(null, null, window.location.pathname);
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Update active state in the navbar BEFORE scrolling
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                    navLink.classList.remove('gold-color');
                });
                this.classList.add('active');
                this.classList.add('gold-color');
                
                // Calculate exact position with fixed offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const scrollToPosition = targetPosition - navbarHeight;
                
                // Then scroll
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without reload
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    let lastScrollTop = 0;
    let scrollTimer;
    
    // Debounce function to prevent rapid execution
    function debounce(func, delay) {
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    // Background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Update active link based on scroll position (with debounce)
    window.addEventListener('scroll', debounce(function() {
        const scrollPosition = window.scrollY + navbarHeight;
        const heroSection = document.getElementById('hero');
        const homeLink = document.querySelector('.navbar .nav-link[href="#"]');
        const aboutSection = document.getElementById('about');
        
        // Prevent shaking by checking if scroll direction changed dramatically
        const currentScrollTop = window.scrollY;
        if (Math.abs(currentScrollTop - lastScrollTop) < 50) {
            // Small scroll change - don't update active state to prevent flickering
            lastScrollTop = currentScrollTop;
            return;
        }
        lastScrollTop = currentScrollTop;
        
        // Check if we're at the top near the hero section
        if (scrollPosition < aboutSection.offsetTop) {
            updateActiveNavLink(homeLink);
        } else {
            updateActiveSectionNavLink(scrollPosition, navbarHeight);
        }
    }, 50)); // 50ms debounce
}

/**
 * Update the active navigation link
 */
function updateActiveNavLink(linkElement) {
    if (!linkElement) return;
    
    // Get current scroll position before DOM changes
    const currentScrollPosition = window.scrollY;
    
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
        link.classList.remove('active');
        link.classList.remove('gold-color');
    });
    
    linkElement.classList.add('active');
    linkElement.classList.add('gold-color');
    
    // Restore scroll position after DOM changes
    window.scrollTo({
        top: currentScrollPosition,
        behavior: 'auto'
    });
}

/**
 * Find and update the active section's nav link
 */
function updateActiveSectionNavLink(scrollPosition, navbarHeight) {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = null;
    
    // Find which section we're currently viewing
    sections.forEach(section => {
        // Add some buffer to the top of each section to prevent shaking
        const sectionTop = section.offsetTop - (navbarHeight + 5);
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // If we're within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
        }
    });
    
    // If we found a section, highlight its nav link
    if (currentSection) {
        const sectionId = currentSection.getAttribute('id');
        const navLink = document.querySelector(`.navbar .nav-link[href="#${sectionId}"]`);
        updateActiveNavLink(navLink);
    }
}

/**
 * Mobile menu handling
 */
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Close navbar when a nav item is clicked (mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Add menu-open class to body when menu is open
    navbarToggler.addEventListener('click', function() {
        document.body.classList.toggle('menu-open', navbarCollapse.classList.contains('show'));
    });
}

/**
 * Add subtle parallax effect to hero section
 */
function initParallax() {
    const heroSection = document.getElementById('hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (heroSection) {
            // Adjust the offset for the background image when scrolling
            heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;
        }
    });
}

/**
 * Ensure navbar links have proper colors
 */
function ensureGoldLinks() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Add proper event handlers
    navLinks.forEach(link => {
        // On click, make sure it's gold
        link.addEventListener('click', function() {
            // Make all links tan first
            navLinks.forEach(navLink => {
                navLink.classList.remove('gold-color');
            });
            // Make clicked link gold
            this.classList.add('gold-color');
        });
        
        // Initialize the active link as gold
        if (link.classList.contains('active')) {
            link.classList.add('gold-color');
        }
    });
}

/**
 * Initialize contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                form.reset();
                submitBtn.textContent = 'Message Sent!';
                submitBtn.classList.remove('btn-primary');
                submitBtn.classList.add('btn-success');

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('btn-success');
                    submitBtn.classList.add('btn-primary');
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.classList.remove('btn-primary');
            submitBtn.classList.add('btn-danger');

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('btn-danger');
                submitBtn.classList.add('btn-primary');
                submitBtn.disabled = false;
            }, 3000);
        }
    });
} 