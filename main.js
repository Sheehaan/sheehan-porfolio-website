// ==========================================
// MAIN - Animations and Initialization
// ==========================================

import { initComponents } from './components.js';
import { initProjectCards } from './modal.js';
import { initContactForm } from './form.js';

// Page transition animation
function animatePageEnter() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('page-enter');
    requestAnimationFrame(() => {
      main.classList.add('page-enter-active');
    });
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 14, 26, 0.95)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'var(--color-bg-glass)';
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// Initialize everything
function init() {
  // Determine current page
  const path = window.location.pathname;
  let currentPage = 'home';
  
  if (path.includes('about')) currentPage = 'about';
  else if (path.includes('works')) currentPage = 'works';
  else if (path.includes('contact')) currentPage = 'contact';

  // Initialize components
  initComponents(currentPage);
  
  // Initialize project cards
  initProjectCards();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize animations
  animatePageEnter();
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}