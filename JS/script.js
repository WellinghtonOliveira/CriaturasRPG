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
    parent.children[1].textContent = value; 
}

// Função de busca
function searchCreature() {
    const query = searchInput.value.trim().toLowerCase();

    // Aceitar tanto ID como nome
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
        span.classList.add(type.toLowerCase()); // apenas a classe do tipo
        types.appendChild(span);
    });

    // Stats
    updateStat("hp", creature.stats.hp);
    updateStat("attack", creature.stats.attack);
    updateStat("defense", creature.stats.defense);
    updateStat("special-attack", creature.stats.specialAttack);
    updateStat("special-defense", creature.stats.specialDefense);
    updateStat("speed", creature.stats.speed);
}

searchButton.addEventListener("click", searchCreature);
