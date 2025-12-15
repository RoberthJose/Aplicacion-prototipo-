/* ===== MODO OSCURO ===== */
const toggleDark = document.getElementById('toggle-dark');

// Activa modo oscuro si ya estaba guardado
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Cambia modo oscuro al hacer clic
toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

/* ===== MENÚ HAMBURGUESA ===== */
const toggleMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

if(toggleMenu && menu) {
    toggleMenu.addEventListener('click', () => {
        menu.classList.toggle('active');     // Muestra u oculta el menú
        toggleMenu.classList.toggle('active'); // Animación de botón
    });
}

/* ===== REDIRECCIÓN FORMULARIO LOGIN ===== */
const formLogin = document.querySelector('form.form-login');

if(formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita envío real
        // Aquí puedes agregar validaciones si quieres
        window.location.href = 'dashboard.html'; // Redirige al dashboard
    });
}



