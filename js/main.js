/**
 * main.js
 * Punto de entrada. Orquesta la inicialización de todos los módulos.
 * Depende de: config.js, data.js, whatsapp.js, render.js, countdown.js, animations.js
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Renderizar contenido dinámico
  Render.renderAll();

  // 2. Iniciar cuenta regresiva
  Countdown.start();

  // 3. Iniciar animaciones de scroll
  // Debe ejecutarse DESPUÉS de renderAll() para detectar las tarjetas
  Animations.initScrollReveal();

  // 4. Vincular botones de WhatsApp general (js-wa-general)
  bindWhatsAppButtons();

  // 5. Actualizar año del footer
  updateFooterYear();

  // 6. Configurar comportamiento del botón flotante (IntersectionObserver)
  initFloatingWhatsApp();
});

/**
 * Enlaza todos los botones con clase .js-wa-general al handler de WhatsApp.
 * Usa delegación de eventos en document para manejar botones renderizados dinámicamente.
 */
function bindWhatsAppButtons() {
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.js-wa-general');
    if (!btn) return;
    event.preventDefault();
    WhatsApp.openGeneral();
  });
}

/**
 * Inyecta el año actual en el footer.
 */
function updateFooterYear() {
  const el = document.getElementById('js-year');
  if (el) el.textContent = new Date().getFullYear();
}

/**
 * Controla la visibilidad del botón flotante de WhatsApp.
 * Lo oculta mientras la sección Hero es visible para evitar saturación de botones.
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.querySelector('.floating-wa');
  const heroSection = document.querySelector('.hero');
  
  if (!floatingBtn || !heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Si el hero es visible, ocultar el botón flotante
      if (entry.isIntersecting) {
        floatingBtn.classList.remove('is-visible');
      } else {
        // Al salir del hero, mostrar el botón flotante
        floatingBtn.classList.add('is-visible');
      }
    });
  }, { rootMargin: '-15% 0px 0px 0px' });

  observer.observe(heroSection);
}
