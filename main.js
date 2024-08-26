document.addEventListener('DOMContentLoaded', function () {
    // Efecto de resaltado suave para la sección activa en el menú de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                link.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
                link.style.transform = 'scale(1.1)';
            } else {
                link.style.transform = 'scale(1)';
            }
        });
    });

    // Validación y feedback visual del formulario de suscripción
    const form = document.querySelector('.newsletter-form');
    const emailInput = form.querySelector('input[type="email"]');
    const subscribeButton = form.querySelector('button');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            emailInput.style.borderColor = 'green';
            subscribeButton.innerHTML = '¡Gracias!';
            subscribeButton.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                alert('¡Gracias por suscribirte!');
                form.reset();
                subscribeButton.innerHTML = 'Suscribirse';
                subscribeButton.style.backgroundColor = '';
                emailInput.style.borderColor = '';
            }, 1000);
        } else {
            emailInput.style.borderColor = 'red';
            alert('Por favor, introduce un correo electrónico válido.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Efecto de parallax para imágenes de fondo
    const parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        parallaxSections.forEach(section => {
            let scrollPosition = window.pageYOffset;
            section.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
        });
    });

    // Animaciones en hover con efecto de suavizado
    const hoverElements = document.querySelectorAll('nav ul li a, section ul li, .newsletter-form button');

    hoverElements.forEach(element => {
        element.addEventListener('mouseover', function () {
            element.classList.add('hovered');
            element.style.transition = 'transform 0.3s ease';
            element.style.transform = 'translateY(-5px)';
        });

        element.addEventListener('mouseout', function () {
            element.classList.remove('hovered');
            element.style.transform = 'translateY(0)';
        });
    });
});

