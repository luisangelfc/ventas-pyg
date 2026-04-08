/**
 * whatsapp.js
 * Genera y abre URLs de WhatsApp con mensajes prellenados.
 * Depende de: config.js
 */

const WhatsApp = (() => {
  const BASE_URL = 'https://wa.me/';

  /**
   * Construye la URL de WhatsApp con un mensaje codificado.
   * @param {string} message
   * @returns {string}
   */
  function buildUrl(message) {
    return `${BASE_URL}${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Abre WhatsApp con el mensaje general de bienvenida.
   */
  function openGeneral() {
    window.open(buildUrl(CONFIG.whatsappGeneralMessage), '_blank', 'noopener,noreferrer');
  }

  /**
   * Abre WhatsApp con un mensaje personalizado para un producto.
   * @param {string} productName - Nombre del producto
   */
  function openForProduct(productName) {
    const message = CONFIG.whatsappProductMessage.replace('{nombre}', productName);
    window.open(buildUrl(message), '_blank', 'noopener,noreferrer');
  }

  /**
   * Genera la URL de WhatsApp para un producto (útil para <a href>).
   * @param {string} productName
   * @returns {string}
   */
  function getProductUrl(productName) {
    const message = CONFIG.whatsappProductMessage.replace('{nombre}', productName);
    return buildUrl(message);
  }

  /**
   * Genera la URL de WhatsApp para un catálogo.
   * @param {string} catalogName
   * @returns {string}
   */
  function getCatalogUrl(catalogName) {
    const message = CONFIG.whatsappCatalogMessage.replace('{nombre}', catalogName);
    return buildUrl(message);
  }

  return { openGeneral, openForProduct, getProductUrl, getCatalogUrl };
})();
