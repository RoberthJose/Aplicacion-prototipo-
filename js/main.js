/* ===== MODO OSCURO ===== */
document.addEventListener('DOMContentLoaded', () => {
    const toggleDark = document.getElementById('toggle-dark');

    if(toggleDark) {
        // Activa modo oscuro si ya estaba guardado
        if(localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }

        // Detecta click o touch en móviles
        const switchDark = () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
        };

        toggleDark.addEventListener('click', switchDark);
        toggleDark.addEventListener('touchstart', switchDark);
    }

    /* ===== MENÚ HAMBURGUESA ===== */
    const toggleMenu = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if(toggleMenu && menu) {
        toggleMenu.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggleMenu.classList.toggle('active');
        });
        toggleMenu.addEventListener('touchstart', () => {
            menu.classList.toggle('active');
            toggleMenu.classList.toggle('active');
        });
    }

    /* ===== REDIRECCIÓN FORMULARIO LOGIN ===== */
    const formLogin = document.querySelector('form.form-login');
    if(formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }
});


