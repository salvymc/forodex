const pokedex = document.getElementById("pokedex");
const search_bar = document.getElementById("search_bar");
const optionGen = document.getElementById("select_gen");

fetch(
  "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"
)
  .then((response) => response.json())
  .then((data) => {
    dataPokemon = data;
    pokemon = data.slice("0", "151");
    pokemon.forEach((element) => {
      createCard(element);
    });
  });

function createCard(pkmn) {
  pokedex.insertAdjacentHTML(
    "beforeend",
    `
    <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 hover:border-red-700">
  <img class="w-full" src="${pkmn.image.hires}" onclick="zoom(this)" alt="">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${pkmn.name.english}</div>
    <p class="text-gray-700 text-base">${pkmn.description}</p>
  </div>
  <div id="typeTag-${pkmn.id}" class="px-6 pt-4 pb-2">
  </div>
</div>
    `
  );
  let typeTag = document.getElementById("typeTag-" + pkmn.id);
  pkmn.type.forEach((e) => {
    typeTag.insertAdjacentHTML(
      "beforeend",
      `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${e}</span>`
    );
  });
}

function zoom(e) {
  const modal = document.getElementById("defaultModal");
  const close_modal = document.getElementById("close_modal");
  close_modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  document.getElementById("img_modal").src = e.src;
  modal.style.display = "block";
  console.log(e.src);
}

search_bar.addEventListener("keyup", (e) => {
  pokedex.innerHTML = "";
  let filtrati = pokemon.filter((f) =>
    f.name.english.toLowerCase().startsWith(search_bar.value.toLowerCase())
  );
  filtrati.forEach((element) => {
    createCard(element);
  });
});

optionGen.addEventListener("change", (changeEvent) => {
  pokedex.innerHTML = "";
  switch (optionGen.value) {
    case "1":
      pokemon = dataPokemon.slice("0", "151");
      break;

    case "2":
      pokemon = dataPokemon.slice("151", "251");
      break;

    case "3":
      pokemon = dataPokemon.slice("251", "386");
      break;

    case "4":
      pokemon = dataPokemon.slice("386", "493");
      break;

    case "5":
      pokemon = dataPokemon.slice("493", "649");
      break;

    case "6":
      pokemon = dataPokemon.slice("649", "721");
      break;

    case "7":
      pokemon = dataPokemon.slice("721", "809");
      break;

    case "8":
      pokemon = dataPokemon.slice("809", "898");
      break;

    default:
      pokemon = dataPokemon;
      break;
  }
  pokemon.forEach((element) => {
    createCard(element);
  });
});
