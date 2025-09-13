// Portfolio Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mouse position tracking
    let mousePosition = { x: 0, y: 0 };
    
    // Initialize all components
    initMouseFollower();
    initFloatingShapes();
    initFloatingParticles();
    initSmoothScrolling();
    initButtonEffects();
    
    // Mouse follower effect
    function initMouseFollower() {
        const mouseFollower = document.getElementById('mouse-follower');
        
        document.addEventListener('mousemove', (e) => {
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
            
            mouseFollower.style.left = (mousePosition.x - 192) + 'px';
            mouseFollower.style.top = (mousePosition.y - 192) + 'px';
        });
    }
    
    // Create floating shapes
    function initFloatingShapes() {
        const shapesContainer = document.getElementById('floating-shapes');
        
        const shapes = [
            { 
                size: { mobile: '80px', tablet: '120px', desktop: '200px' },
                color: 'bg-gradient-to-br from-cyan-400/20 to-blue-600/30', 
                ring: 'ring-2 ring-cyan-300/30', 
                shadow: 'shadow-2xl shadow-cyan-500/20', 
                delay: '0s',
                position: { top: '25%', left: '25%' }
            },
            { 
                size: { mobile: '60px', tablet: '80px', desktop: '120px' },
                color: 'bg-gradient-to-br from-indigo-400/25 to-purple-600/35', 
                ring: 'ring-2 ring-indigo-300/40', 
                shadow: 'shadow-2xl shadow-indigo-500/25', 
                delay: '1s',
                position: { top: '75%', right: '25%' }
            },
            { 
                size: { mobile: '50px', tablet: '70px', desktop: '100px' },
                color: 'bg-gradient-to-br from-sky-400/20 to-teal-600/30', 
                ring: 'ring-2 ring-sky-300/35', 
                shadow: 'shadow-2xl shadow-sky-500/20', 
                delay: '2s',
                position: { bottom: '25%', left: '33%' }
            },
        ];
        
        shapes.forEach((shape, index) => {
            const div = document.createElement('div');
            div.className = `
                absolute transform -translate-x-1/2 -translate-y-1/2
                ${getResponsiveSize(shape.size)} ${shape.color} ${shape.ring} ${shape.shadow}
                rounded-full backdrop-blur-sm animate-float rotate-12
                transition-all duration-1000 ease-out floating-shape
            `;
            
            // Set position
            Object.keys(shape.position).forEach(pos => {
                div.style[pos] = shape.position[pos];
            });
            
            div.style.animationDelay = shape.delay;
            div.style.animationDuration = `${6 + index * 2}s`;
            
            // Add size classes for responsive design
            if (index === 0) div.classList.add('large');
            else if (index === 1) div.classList.add('medium');
            else div.classList.add('small');
            
            shapesContainer.appendChild(div);
        });
    }
    
    // Helper function for responsive sizes
    function getResponsiveSize(sizeObj) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            return `w-20 h-20`; // mobile
        } else if (screenWidth < 1024) {
            return `w-32 h-32`; // tablet
        } else {
            return `w-48 h-48`; // desktop
        }
    }
    
    // Create floating particles
    function initFloatingParticles() {
        const particlesContainer = document.getElementById('particles');
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full animate-float';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                
                // For now, just add a visual feedback
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'scale(1)';
                }, 150);
                
                // You can implement actual scrolling to sections here
                console.log('Navigate to:', targetId);
            });
        });
    }
    
    // Enhanced button effects
    function initButtonEffects() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            // Add ripple effect on click
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
            
            // Add hover sound effect (optional)
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });
        
        // Add ripple CSS
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Intersection Observer for animation triggers
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));
    }
    
    // Performance optimization - Reduce animations on low-end devices
    function optimizePerformance() {
        const isLowEndDevice = navigator.hardwareConcurrency < 4 || 
                               navigator.deviceMemory < 4;
        
        if (isLowEndDevice) {
            document.body.classList.add('reduce-animations');
            
            // Add CSS for reduced animations
            const style = document.createElement('style');
            style.textContent = `
                .reduce-animations .animate-float {
                    animation-duration: 8s !important;
                }
                .reduce-animations .floating-shape {
                    opacity: 0.5 !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Handle window resize for responsive updates
    window.addEventListener('resize', () => {
        // Update floating shapes sizes if needed
        const shapes = document.querySelectorAll('.floating-shape');
        shapes.forEach(shape => {
            // Re-apply responsive sizing
            const currentClasses = shape.className;
            // Update classes based on new screen size
        });
    });
    
    // Initialize performance optimizations
    optimizePerformance();
    initScrollAnimations();
    
    // Log initialization complete
    console.log('🚀 Portfolio initialized successfully!');
    console.log('✨ All animations and interactions are ready');
});

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential use in other scripts
window.PortfolioUtils = {
    debounce
};