/**
 * render.js
 * Funciones puras de renderizado: reciben datos y devuelven HTML.
 * Depende de: data.js, whatsapp.js
 */

const Render = (() => {

  /** SVG de WhatsApp reutilizable */
  const WA_ICON = `
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <use href="#icon-whatsapp" />
    </svg>`;

  /** SVG de archivo PDF */
  const FILE_ICON = `
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <use href="#icon-file" />
    </svg>`;

  /**
   * Renderiza el badge de un producto (si existe).
   * @param {{ label: string, type: string } | undefined} badge
   * @returns {string}
   */
  function renderBadge(badge) {
    if (!badge) return '';
    return `<span class="tag tag--${badge.type} product-card__badge">${badge.label}</span>`;
  }

  /**
   * Renderiza la fila de precios de un producto.
   * @param {string} price
   * @param {string|undefined} oldPrice
   * @param {string|undefined} discount
   * @returns {string}
   */
  function renderPrices(price, oldPrice, discount) {
    return `
      <div class="product-card__prices">
        <span class="product-card__price">${price}</span>
        ${oldPrice ? `<span class="product-card__price-old">${oldPrice}</span>` : ''}
        ${discount ? `<span class="product-card__discount">${discount}</span>` : ''}
      </div>`;
  }

  /**
   * Renderiza una tarjeta de producto estándar.
   * @param {import('./data.js').Product} product
   * @returns {string}
   */
  function productCard(product) {
    const waUrl = WhatsApp.getProductUrl(product.name);
    return `
      <article class="product-card" data-product="${product.name}">
        <div class="product-card__img-wrap">
          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
            width="400"
            height="200"
          />
          ${renderBadge(product.badge)}
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">${product.name}</h3>
          <p class="product-card__catalog">${product.catalog}</p>
          ${renderPrices(product.price, product.oldPrice, product.discount)}
          <a
            href="${waUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--wa product-card__btn"
            aria-label="Pedir ${product.name} por WhatsApp"
          >
            ${WA_ICON} Pedir por WhatsApp
          </a>
        </div>
      </article>`;
  }

  /**
   * Renderiza una tarjeta de oferta semanal (variante oscura).
   * @param {import('./data.js').WeeklyOffer} offer
   * @returns {string}
   */
  function weeklyCard(offer) {
    const waUrl = WhatsApp.getProductUrl(offer.name);
    return `
      <article class="product-card product-card--dark" data-product="${offer.name}">
        <div class="product-card__img-wrap">
          <img
            src="${offer.img}"
            alt="${offer.name}"
            loading="lazy"
            width="400"
            height="200"
          />
        </div>
        <div class="product-card__body">
          <span class="tag tag--offer" style="margin-bottom: 8px">${offer.discount} ESTA SEMANA</span>
          <h3 class="product-card__name">${offer.name}</h3>
          <p class="product-card__catalog">${offer.catalog}</p>
          ${renderPrices(offer.price, offer.oldPrice)}
          <div class="stock-bar" aria-label="Stock disponible: ${offer.stock}%">
            <p class="stock-bar__label">Stock disponible: ${offer.stock}%</p>
            <div class="stock-bar__track" role="progressbar" aria-valuenow="${offer.stock}" aria-valuemin="0" aria-valuemax="100">
              <div class="stock-bar__fill" style="width: ${offer.stock}%"></div>
            </div>
          </div>
          <a
            href="${waUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--wa product-card__btn"
            aria-label="Aprovechar oferta de ${offer.name} por WhatsApp"
          >
            ${WA_ICON} Aprovechar oferta
          </a>
        </div>
      </article>`;
  }

  /**
   * Renderiza una tarjeta de catálogo.
   * @param {import('./data.js').Catalog} catalog
   * @returns {string}
   */
  function catalogCard(catalog) {
    const waUrl = WhatsApp.getCatalogUrl(catalog.name);
    return `
      <article class="catalog-card">
        <div class="catalog-card__img-wrap">
          <img
            src="${catalog.img}"
            alt="Catálogo ${catalog.name}"
            loading="lazy"
            width="600"
            height="180"
          />
          <div class="catalog-card__overlay" aria-hidden="true"></div>
          <span class="catalog-card__brand">${catalog.name}</span>
        </div>
        <div class="catalog-card__body">
          <p class="catalog-card__desc">${catalog.desc}</p>
          <div class="catalog-card__actions">
            <a
              href="${catalog.pdf}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn--outline"
              aria-label="Ver catálogo ${catalog.name} en PDF"
            >
              ${FILE_ICON} Ver catálogo (PDF)
            </a>
            <a
              href="${waUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--wa btn--wa-sm"
              aria-label="Pedir del catálogo ${catalog.name} por WhatsApp"
            >
              ${WA_ICON} Pedir por WhatsApp
            </a>
          </div>
        </div>
      </article>`;
  }

  /**
   * Inyecta HTML en un contenedor del DOM.
   * @param {string} containerId
   * @param {string} html
   */
  function mount(containerId, html) {
    const el = document.getElementById(containerId);
    if (!el) {
      console.warn(`[Render] Contenedor #${containerId} no encontrado.`);
      return;
    }
    el.innerHTML = html;
  }

  /**
   * Renderiza todos los grids de la página.
   */
  function renderAll() {
    mount('js-products-grid', PRODUCTS.map(productCard).join(''));
    mount('js-weekly-grid',   WEEKLY_OFFERS.map(weeklyCard).join(''));
    mount('js-catalogs-grid', CATALOGS.map(catalogCard).join(''));
  }

  return { renderAll };
})();
