document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-in-out-quad',
    });

    // 2. Theme Switcher Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    
    // Function to apply theme
    const applyTheme = (theme) => {
        body.dataset.theme = theme;
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', theme);
    };

    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    applyTheme(initialTheme);

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // 3. QR Code Modal Logic
    const qrButton = document.getElementById('qr-button');
    const modal = document.getElementById('qr-modal');
    const closeButton = modal.querySelector('.close-button');

    const openModal = () => modal.classList.add('visible');
    const closeModal = () => modal.classList.remove('visible');

    qrButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    
    // Close modal if user clicks on the background overlay
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});