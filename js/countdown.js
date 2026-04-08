/**
 * countdown.js
 * Cuenta regresiva hasta el fin de la semana de ofertas.
 * Depende de: config.js
 */

const Countdown = (() => {
  let intervalId = null;

  /**
   * Calcula la fecha de fin de la semana de oferta.
   * @returns {Date}
   */
  function getEndDate() {
    const now   = new Date();
    const today = now.getDay(); // 0 = domingo
    const target = CONFIG.weeklyOfferEndDay;

    // Días hasta el target
    let daysUntil = (target - today + 7) % 7;
    if (daysUntil === 0) daysUntil = 7; // Si hoy es el día, ir al siguiente ciclo

    const end = new Date(now);
    end.setDate(now.getDate() + daysUntil);
    end.setHours(23, 59, 59, 0);
    return end;
  }

  /**
   * Actualiza los elementos del DOM con el tiempo restante.
   */
  function tick() {
    const diff = getEndDate() - new Date();

    if (diff <= 0) {
      stop();
      return;
    }

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1_000);

    const elH = document.getElementById('js-cd-h');
    const elM = document.getElementById('js-cd-m');
    const elS = document.getElementById('js-cd-s');

    if (elH) elH.textContent = String(h).padStart(2, '0');
    if (elM) elM.textContent = String(m).padStart(2, '0');
    if (elS) elS.textContent = String(s).padStart(2, '0');
  }

  /** Inicia el countdown */
  function start() {
    tick(); // Ejecutar de inmediato antes del primer segundo
    intervalId = setInterval(tick, 1_000);
  }

  /** Detiene el countdown */
  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return { start, stop };
})();
