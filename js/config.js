/**
 * config.js
 * Configuración global de la aplicación.
 * EDITA ESTE ARCHIVO para personalizar la tienda.
 */

const CONFIG = Object.freeze({
  /** Número de WhatsApp con código de país, sin + ni espacios */
  whatsappNumber: '525529143333',

  /** Mensaje general cuando no hay producto específico */
  whatsappGeneralMessage: 'Hola, me gustaría conocer los productos disponibles y sus precios ✨',

  /** Plantilla de mensaje por producto. {nombre} se reemplaza dinámicamente */
  whatsappProductMessage: 'Hola, quiero pedir el producto *{nombre}*, ¿me puedes dar disponibilidad y tiempo de entrega?',

  /** Plantilla de mensaje para catálogos. {nombre} se reemplaza dinámicamente */
  whatsappCatalogMessage: 'Hola me gustaria ordenar algo del catalogo *{nombre}*, me puedes dar información porfavor',

  /** Día de fin de semana para el countdown (0=Dom, 5=Vie, 6=Sáb) */
  weeklyOfferEndDay: 0,
});
