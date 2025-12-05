# Pokédex Web

Este proyecto es una pequeña Pokédex hecha con **HTML, CSS y JavaScript**.  
La idea es simple: escribir el nombre o ID de un Pokémon y obtener su información usando la **PokéAPI**, dentro de una interfaz limpia con modo claro/oscuro y un botón para buscar Pokémon aleatorios.

---

## 🌟 ¿Qué puedes hacer aquí?

- Buscar cualquier Pokémon por **nombre** (ej: `ditto`, `pikachu`, `lucario`)
- Buscar por **ID** (ej: `1`, `25`, `132`)
- Ver su:
  - Imagen oficial  
  - Tipos  
  - Habilidades  
  - Altura y peso  
  - Estadísticas base  
- Cambiar entre **modo claro y oscuro**
- Pedir un Pokémon **aleatorio** con un clic

Todo se actualiza al instante gracias a JavaScript.

---

## 🚀 Cómo usarlo

1. Descarga o abre este proyecto en tu computadora.
2. Asegúrate de tener estos archivos juntos:

- index.html
- styles.css
- index.js
- assets/

3. Abre **index.html** con tu navegador (doble clic).
4. Escribe un nombre o ID en el buscador.
5. Presiona **Buscar** o usa el botón **Aleatorio**.

¡Listo!

---

## 🔗 Fuente de los datos

Este proyecto usa la API gratuita de Pokémon:

https://pokeapi.co/api/v2/pokemon/ditto

---

## 🧩 Estructura del proyecto

```
PROYECTO-INTEGRADOR/
│
├─ assets/
│   └─ 824565.png     → icono de la Pokédex
│
├─ index.html         → estructura principal de la página
├─ styles.css         → estilos, colores y modo oscuro
├─ index.js           → lógica de búsqueda y consumo de la PokéAPI
└─ README.md          → documentación del proyecto
```

---

## 🎨 Personalización

Puedes personalizar tu Pokédex modificando:

- **styles.css** → colores, tamaños, fuente, modo oscuro  
- **mostrarPokemon()** en index.js → estructura de la tarjeta  
- **assets/** → iconos o imágenes

---

## 🤝 Créditos

Proyecto creado por **Edinson Cruz** como parte de un trabajo integrador.  

---

## 🎉 Notas finales


- Uso de APIs con `fetch()`
- Manipulación del DOM
- Manejo de errores
- Modo oscuro con `localStorage`
- Organización de archivos en proyectos web

