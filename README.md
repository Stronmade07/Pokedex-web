Pokédex Web

Este proyecto es una pequeña Pokédex hecha con HTML, CSS y JavaScript.
La idea es simple: escribir el nombre o ID de un Pokémon y obtener su información usando la PokéAPI, todo dentro de una interfaz limpia, con modo claro/oscuro y un botón para buscar Pokémon aleatorios.

🌟 ¿Qué puedes hacer aquí?

Buscar cualquier Pokémon por nombre (ej: ditto, pikachu, lucario)

Buscar por ID (ej: 1, 25, 132)

Ver su:

Imagen oficial

Tipos

Habilidades

Altura y peso

Estadísticas base

Cambiar entre modo claro y oscuro

Pedir un Pokémon aleatorio con un solo clic

Todo se actualiza al instante gracias a JavaScript.

🚀 Cómo usarlo

Descarga o abre este proyecto en tu computadora.

Asegúrate de tener estos archivos juntos:

index.html
styles.css
index.js
assets/


Abre index.html con tu navegador (doble clic y listo).

Escribe un nombre o ID en el buscador.

Presiona Buscar o usa Aleatorio si quieres sorprenderte.

¡Eso es todo!

🔗 Fuente de los datos

Este proyecto usa la API gratuita de Pokémon:
https://pokeapi.co/

La URL base que utilizo es:

https://pokeapi.co/api/v2/pokemon/{nombre-o-id}


Ejemplo:

https://pokeapi.co/api/v2/pokemon/ditto

🧩 Estructura del proyecto
PROYECTO-INTEGRADOR/
│
├─ assets/
│   └─ 824565.png     → icono de la Pokédex
│
├─ index.html         → estructura de la página
├─ styles.css         → diseño y modo oscuro
├─ index.js           → lógica de búsqueda y consumo de la API
└─ README.md          → este archivo

🎨 Personalización

Si quieres cambiar colores, tamaños, fuentes u organizar la tarjeta del Pokémon a tu estilo, puedes:

Modificar styles.css para el diseño

Editar mostrarPokemon() en index.js para reorganizar la información

Cambiar imágenes o iconos en assets/

🤝 Créditos

Proyecto creado por Edinson Cruz como parte de un trabajo integrador.
Gracias a PokéAPI por permitir acceder a esta información de forma gratuita.

🎉 Notas finales

Este proyecto es perfecto para practicar:

Llamadas a APIs con fetch()

Manipulación del DOM

Manejo de errores

Modo oscuro con localStorage

Estructuración de proyectos web pequeños

Disfruta explorando Pokémon y mejorando la Pokédex a tu gusto. Siéntete libre de expandirla con más funciones.