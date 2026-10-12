# Portafolio · Pablo Montealegre

Sitio web personal en español e inglés (botón ES/EN arriba a la derecha). Es HTML, CSS y JavaScript puro, sin dependencias.

## Archivos

```
index.html      → contenido de la página (texto en español)
style.css       → diseño
script.js       → traducción al inglés, menú móvil y animaciones
assets/
  foto.jpg
  CV_Pablo_Montealegre_ES.pdf
  CV_Pablo_Montealegre_EN.pdf
```

## Publicarlo gratis en GitHub Pages

1. Crea una cuenta en https://github.com (si no tienes).
2. Crea un repositorio nuevo **público** llamado exactamente `pablo2502.github.io`.
3. En el repositorio: **Add file → Upload files** y arrastra todo el contenido de esta carpeta (no la carpeta, sino lo que hay dentro).
4. Haz clic en **Commit changes**.
5. En 1–2 minutos estará en línea en https://pablo2502.github.io.

## Agregar capturas de los proyectos

1. Guarda la captura en `assets/` (por ejemplo `assets/evaluacion365.png`, idealmente 1600×1000 px).
2. En `index.html`, dentro del proyecto, reemplaza:
   ```html
   <div class="thumb ph"><span>Evaluación 365</span></div>
   ```
   por:
   ```html
   <img class="thumb" src="assets/evaluacion365.png" alt="Evaluación 365">
   ```

## Agregar enlace a la demo o al código

Cambia:
```html
<a href="#" class="soon" data-i18n="proj.soon">Demo próximamente</a>
```
por:
```html
<a href="https://enlace-a-tu-demo.com" target="_blank" rel="noopener">Ver demo →</a>
```

## Editar textos

- Español: directamente en `index.html`.
- Inglés: en `script.js`, dentro de `EN`, con la misma clave del atributo `data-i18n`.
- Para un proyecto nuevo, copia un bloque `<article class="card">…</article>` completo.

> Antes de publicar capturas o código de proyectos de clientes de FUSOFT, confirma que tienes permiso y que no se ven datos reales.
