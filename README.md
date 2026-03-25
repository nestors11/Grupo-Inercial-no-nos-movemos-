# 🚀 Grupo Inercial - Landing Page

Página web elegante, interactiva y completamente responsive para promocionar el Grupo Inercial y su proyecto académico de física.

## 📁 Estructura del Proyecto

```
Grupo-Inercial-no-nos-movemos-/
│
├── index.html              # Archivo HTML principal con estructura semántica
├── css/
│   └── styles.css          # Estilos CSS modular y responsive
├── js/
│   └── script.js           # Lógica JavaScript interactiva
├── assets/                 # Carpeta para futuros recursos
└── README.md              # Este archivo
```

## 🎨 Características Principales

### ✨ Diseño y Estilo
- **Tema moderno oscuro** con acentos en azul/cian
- **Tipografía elegante** usando Google Fonts (Poppins y Space Mono)
- **Responsive design** - Funciona perfectamente en móviles, tablets y desktops
- **Efectos visuales sofisticados**: hover effects, sombras, transiciones fluidas

### 🎯 Secciones Incluidas

1. **Header/Navbar** - Navegación fija con logo y menú mobile
2. **Hero Section** - Presentación principal del Grupo Inercial con:
   - Animación de fondo dinámico
   - Partículas flotantes interactivas
   - Botones de CTA
   - Indicador de scroll

3. **Sección Proyecto** - Descripción del cohete de agua con:
   - Texto descriptivo mejorado
   - 4 tarjetas de características con iconos
   - Animaciones al hacer scroll

4. **Sección Integrantes** - Tarjetas modernas de los 5 integrantes:
   - Jacel Thomas Enciso Pinzón (Director Ejecutivo)
   - Byron Daniel Giraldo Castro (Director Científico)
   - Duban Antonio Martinez Pajajoy (Director Creativo)
   - Juan David Mendieta Cortes (Director Financiero)
   - Néstor Steven Piraquive Garzón (Director Creativo)

5. **Footer** - Enlaces y información de contacto

### 🎭 Interactividad

- ✅ Menú mobile con hamburguesa animada
- ✅ Scroll suave entre secciones
- ✅ Animaciones de entrada con scroll reveal
- ✅ Efecto parallax en el hero
- ✅ Brillo dinámico en tarjetas al pasar el mouse
- ✅ Partículas flotantes en el fondo
- ✅ Animaciones de carga en cadena
- ✅ Navegación con teclas de flecha
- ✅ Indicador de scroll animado

## 🚀 Cómo Usar

### Opción 1: Abrir en el navegador
1. Abre el archivo `index.html` directamente en tu navegador
2. La página se cargará completamente funcional

### Opción 2: Usar un servidor local (Recomendado)

**Con Python 3:**
```bash
cd /home/nesgod/Escritorio/Grupo-Inercial-no-nos-movemos-/
python -m http.server 8000
```
Luego abre en el navegador: `http://localhost:8000`

**Con Python 2:**
```bash
cd /home/nesgod/Escritorio/Grupo-Inercial-no-nos-movemos-/
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**
```bash
npm install -g http-server
http-server /home/nesgod/Escritorio/Grupo-Inercial-no-nos-movemos-/
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (versión completa con todas las características)
- **Tablet**: 768px - 1199px (layout adaptado)
- **Móvil**: Menos de 768px (menú hamburguesa, una columna)
- **Móvil pequeño**: Menos de 480px (fuentes ajustadas, espacios optimizados)

## 🎨 Paleta de Colores

```css
--color-dark: #0a0e27           /* Fondo principal oscuro */
--color-accent: #00d4ff          /* Azul cian principal */
--color-accent-alt: #0099ff      /* Azul cian secundario */
--color-card-bg: #1a1f3a         /* Fondo de tarjetas */
--color-text-primary: #ffffff    /* Texto principal */
--color-text-secondary: #a0a8c9  /* Texto secundario */
```

## 🔧 Personalización

### Cambiar Colores
En `css/styles.css`, modifica las variables CSS en `:root`:

```css
:root {
    --color-accent: #00d4ff;           /* Tu color aquí */
    --color-accent-alt: #0099ff;       /* Tu color aquí */
    /* ... más variables ... */
}
```

### Cambiar Contenido
- **Nombres/roles de integrantes**: Edita en `index.html` sección `#integrantes`
- **Descripción del proyecto**: Edita en `index.html` sección `#proyecto`
- **Textos del header**: Modifica el navbar en `index.html`

### Ajustar Animaciones
En `css/styles.css`, busca las transiciones:

```css
--transition-fast: 0.2s ease-in-out;    /* Cambiar duración */
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

## 📊 Características Avanzadas

### JavaScript Utilities
El archivo `script.js` incluye funciones útiles:

- `createParticles()` - Genera partículas animadas
- `observeScrollReveal()` - Animaciones al hacer scroll
- `getElementPosition()` - Obtiene posición de elementos
- `isElementVisible()` - Verifica visibilidad
- `debounce()` - Optimiza listeners
- `trackEvent()` - Sistema de analytics

### Accesibilidad
- ✅ HTML semántico (header, section, article, footer)
- ✅ ARIA labels en botones
- ✅ Navegación por teclado (Tab, Enter, Flechas)
- ✅ Respeta preferencias de movimiento reducido
- ✅ Contraste adecuado de colores

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles (iOS Safari, Chrome Android)

## 📝 Notas Técnicas

### HTML
- Estructura semántica completa
- Meta tags para SEO y responsive
- Google Fonts integrados
- Sin frameworks (HTML puro)

### CSS
- CSS Grid y Flexbox para layouts
- Variables CSS para fácil personalización
- Media queries para responsividad
- Animaciones con @keyframes
- Prefijos de navegadores incluidos

### JavaScript
- Vanilla JavaScript (sin librerías)
- Intersection Observer API para scroll reveal
- Event delegation para mejor performance
- Funciones debounce para optimización
- Manejo de errores incluido

## 🐛 Resolución de Problemas

**Problema**: Las animaciones no se ven suave
- **Solución**: Verifica que tu navegador tenga aceleración de hardware habilitada

**Problema**: El menú mobile no funciona
- **Solución**: Verifica que JavaScript esté habilitado en tu navegador

**Problema**: Las fuentes no se cargan
- **Solución**: Verifica tu conexión a internet (Google Fonts requiere conexión)

## 📈 Mejoras Futuras (Opcionales)

- [ ] Agregar sección de galería de fotos
- [ ] Integrar formulario de contacto
- [ ] Agregar blog o noticias
- [ ] Implementar dark mode toggle
- [ ] Añadir animaciones 3D con WebGL
- [ ] Integrar redes sociales
- [ ] Agregar videos del proyecto
- [ ] Implementar comentarios o foro

## 📄 Licencia

Este proyecto es de uso libre para fines educativos.

## 👥 Créditos

**Grupo Inercial**
- Jacel Thomas Enciso Pinzón - Director Ejecutivo
- Byron Daniel Giraldo Castro - Director Científico
- Duban Antonio Martinez Pajajoy - Director Creativo
- Juan David Mendieta Cortes - Director Financiero
- Néstor Steven Piraquive Garzón - Director Creativo

---

**"La física deja de ser solo teoría… cuando despega."** 🚀

Desarrollado con ❤️ para el Grupo Inercial | 2026
