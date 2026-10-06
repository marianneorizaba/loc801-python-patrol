// ============================================================
// UI strings — one object per locale
// Students: replace the Spanish placeholder values below
// with your translations.
// ============================================================
const STRINGS = {
    'en-US': {
        newsletterSignup: 'Thank you for signing up! You would receive a confirmation email in a real implementation.'
    },
    'es-US': {
        newsletterSignup: '¡Gracias por suscribirte! En una implementación real, recibirías un correo electrónico de confirmación.'
        // TODO (students): replace the English above with your Spanish translation.
    }
};

// Detect the page language from the <html lang> attribute.
// Falls back to English if the locale is not found.
const pageLang = document.documentElement.lang || 'en-US';
const MESSAGES = STRINGS[pageLang] || STRINGS['en-US'];

// ============================================================
// Newsletter form submission
// ============================================================
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(MESSAGES.newsletterSignup);
    this.reset();
});

// ============================================================
// Back to top button
// ============================================================
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
