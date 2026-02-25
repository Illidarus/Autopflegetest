document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Impressum Modal
    const modal = document.getElementById('impressum-modal');
    const openBtn = document.getElementById('open-impressum');
    const closeBtn = document.querySelector('.close-modal');

    openBtn.onclick = () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Form Handling
    const form = document.getElementById('landing-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Wird gesendet...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            btn.innerText = 'Erfolgreich gesendet!';
            btn.style.background = '#28a745';
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
});
