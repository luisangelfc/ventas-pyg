/**
 * templates.js — Funciones de renderizado de tarjetas HTML
 *
 * Responsabilidad única: generar strings HTML a partir de datos.
 * No contiene lógica de negocio ni acceso al DOM global.
 */

const Templates = (() => {
  /** SVG del ícono de WhatsApp (reutilizado en varios botones) */
  const WA_ICON = `
    <svg class="btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.428l5.748-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.367l-.358-.213-3.714.974.99-3.626-.233-.372A9.818 9.818 0 0112 2.182c5.421 0 9.818 4.397 9.818 9.818S17.421 21.818 12 21.818z"/>
    </svg>`;

  /** SVG del ícono de PDF */
  const PDF_ICON = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>`;

  /**
   * Renderiza el badge de un producto si existe.
   * @param {object|undefined} badge
   * @returns {string} HTML del badge o cadena vacía
   */
  function renderBadge(badge) {
    if (!badge) return '';
    return `<span class="product-card__badge badge badge--${badge.type}">${badge.label}</span>`;
  }

  /**
   * Renderiza el precio anterior si existe.
   * @param {string|undefined} oldPrice
   * @param {string|undefined} discount
   * @returns {string} HTML del precio anterior y descuento, o cadena vacía
   */
  function renderOldPrice(oldPrice, discount) {
    if (!oldPrice) return '';
    return `
      <span class="product-card__price--old">${oldPrice}</span>
      ${discount ? `<span class="product-card__discount">${discount}</span>` : ''}
    `;
  }

  /**
   * Genera el HTML de una tarjeta de producto destacado.
   * @param {object} product - Datos del producto desde data.js
   * @returns {string} HTML de la tarjeta
   */
  function productCard(product) {
    const waURL = WhatsApp.buildProductURL(product.name);

    return `
      <article class="product-card js-reveal">
        <div class="product-card__img-wrap">
          <img src="${product.img}" alt="${product.name}" loading="lazy" />
          ${renderBadge(product.badge)}
        </div>
        <div class="product-card__body">
          <p class="product-card__name">${product.name}</p>
          <p class="product-card__catalog">${product.catalog}</p>
          <div class="product-card__price-row">
            <span class="product-card__price">${product.price}</span>
            ${renderOldPrice(product.oldPrice, product.discount)}
          </div>
          <a href="${waURL}" target="_blank" rel="noopener noreferrer"
             class="btn btn--wa btn--md product-card__btn"
             aria-label="Pedir ${product.name} por WhatsApp">
            ${WA_ICON} Pedir por WhatsApp
          </a>
        </div>
      </article>`;
  }

  /**
   * Genera el HTML de una tarjeta de oferta semanal.
   * @param {object} offer - Datos de la oferta desde data.js
   * @returns {string} HTML de la tarjeta
   */
  function weeklyCard(offer) {
    const waURL = WhatsApp.buildProductURL(offer.name);

    return `
      <article class="weekly-card product-card js-reveal">
        <div class="product-card__img-wrap">
          <img src="${offer.img}" alt="${offer.name}" loading="lazy" />
        </div>
        <div class="product-card__body">
          <span class="badge badge--week" style="margin-bottom:8px">${offer.discount} ESTA SEMANA</span>
          <p class="product-card__name">${offer.name}</p>
          <p class="product-card__catalog">${offer.catalog}</p>
          <div class="product-card__price-row">
            <span class="product-card__price">${offer.price}</span>
            <span class="product-card__price--old">${offer.oldPrice}</span>
          </div>
          <div class="stock-bar" role="meter" aria-valuenow="${offer.stock}" aria-valuemin="0" aria-valuemax="100"
               aria-label="Stock disponible: ${offer.stock}%">
            <p class="stock-bar__label">Stock disponible: ${offer.stock}%</p>
            <div class="stock-bar__track">
              <div class="stock-bar__fill" style="width: ${offer.stock}%"></div>
            </div>
          </div>
          <a href="${waURL}" target="_blank" rel="noopener noreferrer"
             class="btn btn--wa btn--md product-card__btn"
             aria-label="Aprovechar oferta de ${offer.name} por WhatsApp">
            ${WA_ICON} Aprovechar oferta
          </a>
        </div>
      </article>`;
  }

  /**
   * Genera el HTML de una tarjeta de catálogo.
   * @param {object} catalog - Datos del catálogo desde data.js
   * @returns {string} HTML de la tarjeta
   */
  function catalogCard(catalog) {
    const waURL = WhatsApp.buildProductURL(`catálogo ${catalog.name}`);

    return `
      <article class="catalog-card js-reveal">
        <div class="catalog-card__img-wrap">
          <img src="${catalog.img}" alt="Catálogo ${catalog.name}" loading="lazy" />
          <div class="catalog-card__overlay" aria-hidden="true"></div>
          <p class="catalog-card__brand">${catalog.name}</p>
        </div>
        <div class="catalog-card__body">
          <p class="catalog-card__desc">${catalog.desc}</p>
          <div class="catalog-card__actions">
            <a href="${catalog.pdf}" target="_blank" rel="noopener noreferrer"
               class="btn--pdf"
               aria-label="Ver catálogo PDF de ${catalog.name}">
              ${PDF_ICON} Ver catálogo (PDF)
            </a>
            <a href="${waURL}" target="_blank" rel="noopener noreferrer"
               class="btn btn--wa btn--md"
               aria-label="Pedir del catálogo ${catalog.name} por WhatsApp">
              ${WA_ICON} Pedir por WhatsApp
            </a>
          </div>
        </div>
      </article>`;
  }

  /**
   * Renderiza un array de items en un contenedor del DOM.
   * @param {HTMLElement} container - Elemento contenedor
   * @param {Array}       items     - Array de datos
   * @param {Function}    template  - Función que convierte un item en HTML
   */
  function renderInto(container, items, template) {
    if (!container) {
      console.warn('Templates.renderInto: contenedor no encontrado.');
      return;
    }
    container.innerHTML = items.map(template).join('');
  }

  return { productCard, weeklyCard, catalogCard, renderInto };
})();
