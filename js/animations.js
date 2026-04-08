/**
 * animations.js
 * Animaciones de scroll reveal con IntersectionObserver.
 * No depende de ningún otro módulo.
 */

const Animations = (() => {
  const SELECTOR  = '.product-card, .catalog-card, .step-card';
  const STAGGER_MS = 60; // delay entre tarjetas visibles al mismo tiempo

  /**
   * Inicializa el observer para animar elementos al entrar al viewport.
   */
  function initScrollReveal() {
    // Respetar preferencias de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll(SELECTOR);

    if (!elements.length) return;

    // Estado inicial: invisible y desplazado hacia abajo
    elements.forEach((el) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleIndex = 0;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const delay = visibleIndex * STAGGER_MS;
          visibleIndex++;

          setTimeout(() => {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
  }

  return { initScrollReveal };
})();
