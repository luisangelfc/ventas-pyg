/**
 * reveal.js — Módulo de animación de entrada por scroll (Reveal on Scroll)
 *
 * Responsabilidad única: observar elementos marcados con .js-reveal
 * y aplicarles una animación fadeUp cuando entran al viewport.
 * Usa IntersectionObserver para rendimiento óptimo.
 */

const Reveal = (() => {
  /** @type {IntersectionObserver|null} */
  let observer = null;

  /**
   * Aplica los estilos iniciales (invisible + desplazado) a un elemento.
   * @param {HTMLElement} el
   */
  function setInitialState(el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  }

  /**
   * Revela un elemento (visible + posición original).
   * @param {HTMLElement} el
   * @param {number}      index - Para escalonar el delay
   */
  function revealElement(el, index) {
    el.style.transitionDelay = `${index * CONFIG.revealStaggerDelay}s`;
    el.style.opacity         = '1';
    el.style.transform       = 'translateY(0)';
  }

  /**
   * Inicializa el observer y observa todos los elementos .js-reveal.
   * Debe llamarse DESPUÉS de que el contenido dinámico esté en el DOM.
   */
  function init() {
    const elements = document.querySelectorAll('.js-reveal');

    if (!elements.length) return;

    // Si IntersectionObserver no está disponible, mostramos todo directamente
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.style.opacity   = '1';
        el.style.transform = 'none';
      });
      return;
    }

    elements.forEach(setInitialState);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            revealElement(entry.target, index);
            observer.unobserve(entry.target); // se anima una sola vez
          }
        });
      },
      { threshold: CONFIG.revealThreshold }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /** Desconecta el observer (útil al destruir la página en SPAs). */
  function destroy() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  return { init, destroy };
})();
