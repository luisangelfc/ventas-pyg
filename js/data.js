/**
 * data.js
 * Datos de productos, ofertas y catálogos.
 * Reemplaza las URLs de imágenes y PDFs con las tuyas reales.
 */

/** @typedef {{ name: string, catalog: string, price: string, oldPrice?: string, discount?: string, badge?: { label: string, type: string }, img: string }} Product */
/** @typedef {{ name: string, catalog: string, price: string, oldPrice: string, discount: string, stock: number, img: string }} WeeklyOffer */
/** @typedef {{ name: string, desc: string, img: string, pdf: string }} Catalog */

/** @type {Product[]} */
const PRODUCTS = [
  {
    name: 'Perfume Kaiak Masculino',
    catalog: 'Natura',
    price: '$389',
    oldPrice: '$450',
    discount: '−14%',
    badge: { label: '🔥 Popular', type: 'pop' },
    img: 'https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw6bf43493/ProdutoJoia/mobile/111171.jpg',
  },
  {
    name: 'Crema Tododia Coco',
    catalog: 'Natura',
    price: '$210',
    badge: { label: '✨ Nuevo', type: 'new' },
    img: 'https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw2c111615/ProdutoJoia/mobile/103380.jpg',
  },
  {
    name: 'Jarro Térmico 1.5 L',
    catalog: 'Tupperware',
    price: '$520',
    oldPrice: '$650',
    discount: '−20%',
    badge: { label: '🏷️ Oferta', type: 'offer' },
    img: 'https://resources.sears.com.mx/medios-plazavip/mkt/6538528940389_02jpg.jpg?scale=500&qlty=75',
  },
  {
    name: 'Set Cuadrados Modulares',
    catalog: 'Tupperware',
    price: '$780',
    img: 'https://www.tupperware.com/cdn/shop/files/10049000372_TW-Modular-mates-Square-4PCS-SET-2510-5001_serene-sky.jpg?v=1767119640&width=1445',
  },
  {
    name: 'Multifuncional Organizadora',
    catalog: 'Betterware',
    price: '$350',
    oldPrice: '$420',
    discount: '−17%',
    badge: { label: '⚠️ Últimas', type: 'last' },
    img: 'https://m.media-amazon.com/images/I/813coJGdHaL._AC_UF894,1000_QL80_.jpg',
  },
  {
    name: 'Kit Skincare Chronos',
    catalog: 'Natura',
    price: '$1,290',
    badge: { label: '🔥 Popular', type: 'pop' },
    img: 'https://http2.mlstatic.com/D_NQ_NP_611944-MLM84323743352_052025-O.webp',
  },
  {
    name: 'Contenedor Eco Lunch',
    catalog: 'Tupperware',
    price: '$460',
    badge: { label: '✨ Nuevo', type: 'new' },
    img: 'https://m.media-amazon.com/images/I/51rUhlXvoiL.jpg',
  },

];

/** @type {WeeklyOffer[]} */
const WEEKLY_OFFERS = [
  {
    name: 'Sérum Facial Luminância',
    catalog: 'Natura',
    price: '$650',
    oldPrice: '$890',
    discount: '−27%',
    stock: 30,
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&q=80',
  },
  {
    name: 'Juego Bowls Fresh & Go 4 pzas',
    catalog: 'Tupperware',
    price: '$890',
    oldPrice: '$1,200',
    discount: '−26%',
    stock: 15,
    img: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80',
  },
  {
    name: 'Organizador de Cajones Slim',
    catalog: 'Betterware',
    price: '$190',
    oldPrice: '$280',
    discount: '−32%',
    stock: 60,
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80',
  },
  {
    name: 'Colonia Essencial Masculina',
    catalog: 'Natura',
    price: '$480',
    oldPrice: '$620',
    discount: '−23%',
    stock: 45,
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80',
  },
];

/** @type {Catalog[]} */
const CATALOGS = [
  {
    name: 'Natura',
    desc: 'Perfumes, cremas, cuidado de la piel y maquillaje',
    img: 'assets/natura.jpg',
    pdf: 'https://drive.google.com/file/d/16o7EHzwlJ363e2a0LskVuO1slhFFKoKd/view?usp=drive_link', // Reemplaza con la URL real del PDF
  },
  {
    name: 'Tupperware',
    desc: 'Contenedores, termos y soluciones para la cocina.',
    img: 'https://revistaunica.com.mx/wp-content/uploads/2024/10/tupperware.jpg',
    pdf: '#',
  },
  {
    name: 'Betterware',
    desc: 'Organización del hogar, limpieza y mucho más.',
    img: 'https://estudiocrater.com/wp-content/uploads/2020/02/BW-1280x800px-0-1.jpg',
    pdf: 'https://drive.google.com/file/d/1nhoQmiyCscNZCNOxGAXcYhpCYnxOAsfx/view?usp=drive_link',
  },
  {
    name: 'Sheló Nabel',
    desc: 'Descubre los mejores productos de belleza y cuidado personal.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMGbMTaRHnFWAJVSxjtNSpo3gceAFRGkPjQ&s',
    pdf: 'https://drive.google.com/file/d/1P6BSg7gAp-WyWOVb081TM7zKsMy7NDSw/view?usp=drive_link',
  },
  {
    name: 'Jafra',
    desc: 'Fragancias, maquillaje y cuidado de la piel.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSUo7fRVd4P1arrKQoLP7Iw0a8_m4odYn7Q&s',
    pdf: 'https://drive.google.com/file/d/1GMU2nse_IDIoeOV_6VxJoCwCw8IWZT9y/view?usp=drive_link',
  },
  {
    name: 'Avon',
    desc: 'Cosméticos, perfumes y productos para el hogar.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKUHnw1aKoqkTD2GUPtS0DFhxgkpFeBqwog&s',
    pdf: 'https://drive.google.com/file/d/1qw_WCknb8J8at7QQRpVEi9TJHDSdPjmR/view?usp=drive_link',
  },
  {
    name: 'Casa y Estilo',
    desc: 'Decoración, organización y estilo para tu hogar.',
    img: 'https://lh5.googleusercontent.com/proxy/KogMF05WlbJFrfc8KJow4Dm8ypMzrZnAOmZjfMdxknJbI-LpFdLPsFiSc8L8LS3NZmjAE5DlB5en0raSh_V6slzpKmo2ZIZEhAsnNCXxCJdVbo0EBGK2ZvPkZA',
    pdf: 'https://drive.google.com/file/d/1EFOOqDEZATDx6MXgiGoWlJTkFY0m090a/view?usp=drive_link',
  },
];
