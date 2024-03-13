import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer) {
  throw new Error("Card container not found");
}
cardContainer.innerHTML = `
<form>
    <label for="name">Search pokemon by name:</label>
    <input type="text" id="name" name="name" >
    <button type="submit">Search</button>
</form>
`;
const button = document.querySelector<HTMLButtonElement>("button");
const input = document.querySelector<HTMLInputElement>("input");
if (!button || !input) {
  throw new Error("Card container not found");
}

pokemonArray.forEach((pokemon) => {
  cardContainer.innerHTML += `<div class="card">
    <div class="card__content">
    <img src=${pokemon.sprite} alt="${pokemon.name} image" class="card__image">
  <div class="card__heading" style="text-transform: capitalize">${
    pokemon.name
  }</div>
    <div class="card__text" style="text-align:left">${pokemon.name} (#${
    pokemon.id
  }) is a ${pokemon.types.join(" & ")}pokemon.</div></div>

  </div>`;
});

const searchHandler = (event: Event) => {

  event.preventDefault();
  cardContainer.innerHTML = `
  <form>
      <label for="Search pokemon by name">:</label>
      <input type="text" id="name" name="name" >
      <button type="submit">Search</button>
  </form>
  `
  pokemonArray.forEach((pokemon) => {
   ;

    if (pokemon.name.includes(input.value)) {
      console.log(input.value);

      cardContainer.innerHTML += `<div class="card">
            <div class="card__content">
            <img src=${pokemon.sprite} alt="${
        pokemon.name
      } image" class="card__image">
          <div class="card__heading" style="text-transform: capitalize">${
            pokemon.name
          }</div>
            <div class="card__text style="text-align:left">${pokemon.name} (#${
        pokemon.id
      }) is a ${pokemon.types.join(" & ")}pokemon.</div></div>
            
          </div>`;
    }
  });
};

button.addEventListener("click", searchHandler);
