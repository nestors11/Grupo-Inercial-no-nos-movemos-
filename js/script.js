/* ========================================
   GRUPO INERCIAL - SCRIPT PRINCIPAL
   ======================================== */

// ========== VARIABLES GLOBALES ==========
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const particlesContainer = document.getElementById('particles');
const scrollRevealElements = document.querySelectorAll('.feature-item, .team-card');

// ========== HEADER SCROLL EFFECT ==========
/**
 * Detecta el scroll y aplica estilos al header
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== MENU MOBILE TOGGLE ==========
/**
 * Abre/cierra el menú mobile
 */
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

/**
 * Cierra el menú al hacer click en un enlace
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

/**
 * Cierra el menú al hacer click fuera de él
 */
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// ========== GENERADOR DE PARTÍCULAS ==========
/**
 * Crea partículas animadas en el hero
 */
function createParticles() {
    const particleCount = window.innerWidth > 768 ? 50 : 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posición aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Duración de la animación aleatoria
        const duration = 3 + Math.random() * 4;
        
        // Desplazamiento aleatorio
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--duration', duration + 's');
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        // Delay aleatorio
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Crear partículas al cargar
if (particlesContainer) {
    createParticles();
}

// Recrear partículas al cambiar tamaño
window.addEventListener('resize', () => {
    particlesContainer.innerHTML = '';
    createParticles();
});

// ========== SCROLL REVEAL ANIMATION ==========
/**
 * Anima elementos cuando entran en el viewport
 */
function observeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });
}

// Aplicar scroll reveal si existen elementos
if (scrollRevealElements.length > 0) {
    observeScrollReveal();
}

// ========== SMOOTH SCROLL ==========
/**
 * Scroll suave para enlaces de navegación
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Evitar scroll si el href es solo "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== INTERACTIVIDAD EN TARJETAS ==========
/**
 * Añade efecto de brillo al pasar el mouse por las tarjetas
 */
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const background = card.querySelector('.card-background');
        background.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 212, 255, 0.3) 0%, rgba(26, 31, 58, 0) 70%)`;
    });

    card.addEventListener('mouseleave', () => {
        const background = card.querySelector('.card-background');
        background.style.background = 'var(--gradient-accent)';
    });
});

// ========== PARALLAX EFFECT (Opcional) ==========
/**
 * Efecto parallax suave en el fondo del hero
 */
function handleParallax() {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    
    if (hero && scrolled < hero.offsetHeight + 200) {
        const animatedBg = document.querySelector('.animated-bg');
        animatedBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

window.addEventListener('scroll', handleParallax, { passive: true });

// ========== CONTADOR ANIMADO (Opcional) ==========
/**
 * Anima números cuando entran en vista
 * Formato: <span class="counter" data-target="100"></span>
 */
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Ejecutar si existen contadores
if (document.querySelectorAll('.counter').length > 0) {
    animateCounters();
}

// ========== KEYBOARD NAVIGATION ==========
/**
 * Navegar con teclas (flecha arriba/abajo)
 */
let currentSectionIndex = 0;
const sections = document.querySelectorAll('section, footer');

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
        currentSectionIndex--;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

// Actualizar índice de sección al hacer scroll
window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });
});

// ========== GESTIÓN DE PERFORMANCE ==========
/**
 * Detener animaciones de partículas en dispositivos de bajo rendimiento
 */
function reduceMotionIfNeeded() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--transition-normal', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        
        // Mostrar aviso si lo deseas
        console.log('✓ Movimientos reducidos según preferencias del sistema');
    }
}

reduceMotionIfNeeded();

// ========== INICIALIZACIÓN ==========
/**
 * Función de inicialización del documento
 */
function init() {
    console.log('✓ Grupo Inercial - Página inicializada correctamente');
    console.log('✓ Animaciones: Activas');
    console.log('✓ Responsive: Habilitado');
    console.log('✓ Interactividad: Habilitada');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========== UTILITY FUNCTIONS ==========
/**
 * Obtiene la posición de un elemento respecto al viewport
 */
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        visible: rect.top < window.innerHeight && rect.bottom > 0
    };
}

/**
 * Verifica si un elemento es visible en el viewport
 */
function isElementVisible(element) {
    const position = getElementPosition(element);
    return position.visible;
}

/**
 * Debounce para optimizar listeners
 */
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

// ========== ACCESIBILIDAD ==========
/**
 * Mejora la accesibilidad del sitio
 */
function improveAccessibility() {
    // Focus visible en navegación
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('using-keyboard');
    });

    // ARIA labels en botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', btn.textContent);
        }
    });
}

improveAccessibility();

// ========== ANALYTICS (OPCIONAL) ==========
/**
 * Registra eventos de usuario (opcional)
 */
function trackEvent(eventName, eventData = {}) {
    console.log(`📊 Evento: ${eventName}`, eventData);
    // Aquí puedes enviar datos a Google Analytics u otro servicio
}

// Rastrear clics en botones
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('button_click', { button_text: btn.textContent });
    });
});

// Rastrear navegación
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('nav_click', { section: link.getAttribute('href') });
    });
});

// ========== ERROR HANDLING ==========
/**
 * Manejo de errores global
 */
window.addEventListener('error', (event) => {
    console.error('❌ Error:', event.message);
    // Aquí puedes enviar el error a un servicio de monitoreo
});

// ========== FIN DEL SCRIPT ==========
