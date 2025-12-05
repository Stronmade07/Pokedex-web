// -----------------------------
// Selección de elementos
// -----------------------------
const btnTheme = document.getElementById('toggle-theme');
const input = document.getElementById("pokemon-input");
const btnSearch = document.getElementById("search-btn");
const btnRandom = document.getElementById("random-btn");
const container = document.getElementById("pokemon-container");

// Límite razonable de pokémon (hasta Gen 8 por ejemplo)
const MAX_POKEMON_ID = 898;

// -----------------------------
// Tema oscuro/claro con localStorage
// -----------------------------

// Aplica un tema específico
function aplicarTema(tema) {
    if (tema === 'dark') {
        document.body.classList.add('dark');
        btnTheme.textContent = "🌞";
    } else {
        document.body.classList.remove('dark');
        btnTheme.textContent = "🌙";
    }
    localStorage.setItem('theme', tema);
}

// Carga el tema guardado al iniciar
function cargarTema() {
    const temaGuardado = localStorage.getItem('theme') || 'light';
    aplicarTema(temaGuardado);
}

btnTheme.addEventListener('click', () => {
    const temaActual = document.body.classList.contains('dark') ? 'dark' : 'light';
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    aplicarTema(nuevoTema);
});

// -----------------------------
// Utilidades
// -----------------------------

function normalizarEntrada(valor) {
    return valor.trim().toLowerCase();
}

function mostrarMensaje(texto, tipo = "info") {
    container.innerHTML = `<p class="mensaje ${tipo}">${texto}</p>`;
}

// Manejo de estado de carga
function setLoading(estaCargando) {
    btnSearch.disabled = estaCargando;
    btnRandom.disabled = estaCargando;

    if (estaCargando) {
        btnSearch.textContent = "Buscando...";
    } else {
        btnSearch.textContent = "Buscar";
    }
}

// ID aleatorio dentro de rango
function obtenerIdAleatorio() {
    return Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
}

// -----------------------------
// Llamada a la API
// -----------------------------

async function buscarPokemon(pokemon) {
    try {
        setLoading(true);
        mostrarMensaje("Buscando Pokémon...", "info");

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!resp.ok) {
            mostrarMensaje("Pokémon no encontrado 😢", "error");
            return;
        }

        const data = await resp.json();
        mostrarPokemon(data);

    } catch (error) {
        console.error(error);
        mostrarMensaje("Error al buscar el Pokémon. Intenta de nuevo.", "error");
    } finally {
        setLoading(false);
    }
}

// -----------------------------
// Renderizado de la tarjeta
// -----------------------------

function mostrarPokemon(data) {
    const nombre = data.name;
    const id = data.id;
    const imagen = data.sprites.other["official-artwork"].front_default || data.sprites.front_default;

    const tipos = data.types.map(t => t.type.name).join(", ");
    const habilidades = data.abilities.map(a => a.ability.name).join(", ");

    // altura: decímetros → metros, peso: hectogramos → kg
    const alturaMetros = (data.height / 10).toFixed(1);
    const pesoKg = (data.weight / 10).toFixed(1);

    const stats = data.stats
        .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
        .join("");

    container.innerHTML = `
        <article class="pokemon-card">
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre.toUpperCase()} (#${id})</h2>

            <p><strong>Tipo:</strong> ${tipos}</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
            <p><strong>Altura:</strong> ${alturaMetros} m</p>
            <p><strong>Peso:</strong> ${pesoKg} kg</p>

            <div class="pokemon-details">
                <h3>Estadísticas base:</h3>
                <ul>
                    ${stats}
                </ul>
            </div>
        </article>
    `;
}

// -----------------------------
// Eventos
// -----------------------------

// Buscar al hacer click
btnSearch.addEventListener("click", () => {
    const valorNormalizado = normalizarEntrada(input.value);

    if (valorNormalizado === "") {
        mostrarMensaje("Escribe un nombre o ID.", "error");
        return;
    }

    // Si es número, validamos rango
    const posibleNumero = Number(valorNormalizado);
    if (!isNaN(posibleNumero)) {
        if (posibleNumero < 1 || posibleNumero > MAX_POKEMON_ID) {
            mostrarMensaje(`El ID debe estar entre 1 y ${MAX_POKEMON_ID}.`, "error");
            return;
        }
        buscarPokemon(posibleNumero);
    } else {
        // Es texto, se busca por nombre
        buscarPokemon(valorNormalizado);
    }
});

// Buscar al presionar Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btnSearch.click();
    }
});

// Botón Aleatorio
btnRandom.addEventListener("click", () => {
    const idAleatorio = obtenerIdAleatorio();
    input.value = idAleatorio;
    buscarPokemon(idAleatorio);
});

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarTema();
    mostrarMensaje("Busca un Pokémon por nombre o ID, o usa el botón Aleatorio 🔀 para comenzar.", "info");
});
