// script.js

const creatures = [
    {
        name: "PYROLYNX",
        id: 1,
        weight: 42,
        height: 32,
        types: ["FIRE"],
        stats: {
            hp: 65,
            attack: 80,
            defense: 50,
            specialAttack: 90,
            specialDefense: 55,
            speed: 100
        }
    },
    {
        name: "AQUOROC",
        id: 2,
        weight: 220,
        height: 53,
        types: ["WATER", "ROCK"],
        stats: {
            hp: 85,
            attack: 90,
            defense: 120,
            specialAttack: 60,
            specialDefense: 70,
            speed: 40
        }
    },
    {
        name: "TERRADON",
        id: 3,
        weight: 310,
        height: 68,
        types: ["GROUND"],
        stats: {
            hp: 100,
            attack: 120,
            defense: 140,
            specialAttack: 45,
            specialDefense: 85,
            speed: 35
        }
    },
    {
        name: "ZEPHYRIX",
        id: 4,
        weight: 75,
        height: 45,
        types: ["AIR", "ELECTRIC"],
        stats: {
            hp: 70,
            attack: 65,
            defense: 55,
            specialAttack: 110,
            specialDefense: 80,
            speed: 130
        }
    },
    {
        name: "LUNARA",
        id: 5,
        weight: 180,
        height: 60,
        types: ["DARK", "FAIRY"],
        stats: {
            hp: 95,
            attack: 85,
            defense: 70,
            specialAttack: 120,
            specialDefense: 100,
            speed: 75
        }
    }
];

// Captura dos elementos
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// Função auxiliar -> atualiza o segundo filho de cada status
function updateStat(statId, value) {
    const parent = document.getElementById(statId).parentElement;
    parent.children[1].textContent = value; // só altera o "#"
}

// Função de busca
function searchCreature() {
    const query = searchInput.value.trim().toLowerCase();

    const creature = creatures.find(c =>
        c.name.toLowerCase() === query || String(c.id) === query
    );

    if (!creature) {
        alert("Creature not found");
        return;
    }

    creatureName.textContent = creature.name;
    creatureId.textContent = `#${creature.id}`;
    weight.textContent = `Weight: ${creature.weight}`;
    height.textContent = `Height: ${creature.height}`;

    // Tipos
    types.innerHTML = "";
    creature.types.forEach(type => {
        const span = document.createElement("span");
        span.textContent = type;
        span.classList.add("type", type.toLowerCase());
        types.appendChild(span);
    });

    // Stats (agora no segundo div de cada linha)
    updateStat("hp", creature.stats.hp);
    updateStat("attack", creature.stats.attack);
    updateStat("defense", creature.stats.defense);
    updateStat("special-attack", creature.stats.specialAttack);
    updateStat("special-defense", creature.stats.specialDefense);
    updateStat("speed", creature.stats.speed);
}

searchButton.addEventListener("click", searchCreature);
