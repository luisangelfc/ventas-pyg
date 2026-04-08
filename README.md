# Ventas P&G — Landing Page

Landing page de alta conversión para ventas por WhatsApp.

## 📁 Estructura del proyecto

```
tienda-catalogo/
├── index.html          # Estructura HTML semántica
├── css/
│   ├── base.css        # Variables CSS, reset y utilidades base
│   ├── components.css  # Botones, tarjetas y componentes reutilizables
│   ├── sections.css    # Estilos específicos de cada sección
│   └── responsive.css  # Media queries mobile-first
├── js/
│   ├── config.js       # ⚙️  Configuración (número WA, mensajes)
│   ├── data.js         # 📦 Datos de productos y catálogos
│   ├── whatsapp.js     # 💬 Generación de URLs de WhatsApp
│   ├── render.js       # 🎨 Funciones de renderizado HTML
│   ├── countdown.js    # ⏱️  Cuenta regresiva de ofertas
│   ├── animations.js   # ✨ Scroll reveal con IntersectionObserver
│   └── main.js         # 🚀 Punto de entrada y orquestador
└── README.md
```

## ⚙️ Configuración rápida

### 1. Número de WhatsApp
Edita `js/config.js`:
```js
whatsappNumber: '5215512345678', // Tu número con código de país
```

### 2. Agregar/editar productos
Edita el array `PRODUCTS` en `js/data.js`:
```js
{
  name: 'Nombre del producto',
  catalog: 'Marca',
  price: '$299',
  oldPrice: '$350',  // opcional
  discount: '−15%', // opcional
  badge: { label: '🔥 Popular', type: 'pop' }, // opcional: pop, offer, last, new
  img: 'URL de la imagen',
}
```

### 3. Agregar catálogos
Edita el array `CATALOGS` en `js/data.js`:
```js
{
  name: 'Marca',
  desc: 'Descripción breve',
  img: 'URL de la portada',
  pdf: 'URL del archivo PDF',
}
```

## 🚀 Uso

Abre `index.html` en cualquier navegador moderno. No requiere build ni dependencias.

## ✅ Buenas prácticas aplicadas

- **Separación de responsabilidades**: cada archivo tiene un único propósito
- **Módulo IIFE**: los módulos JS no contaminan el scope global innecesariamente
- **Accesibilidad**: atributos `aria-*`, roles semánticos y `:focus-visible`
- **Mobile-first**: estilos base para móvil, queries para pantallas mayores
- **`prefers-reduced-motion`**: respeta las preferencias de animación del sistema
- **Lazy loading**: imágenes con `loading="lazy"` para mejor performance
- **SVG sprite inline**: íconos centralizados sin peticiones HTTP extra
- **`rel="noopener noreferrer"`**: en todos los links externos por seguridad
