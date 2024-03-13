import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer) {
  throw new Error("Card container not found");
}

pokemonArray.forEach((pokemon) => {
  cardContainer.innerHTML += `<div class="card">
    <div class="card__content">
    <img src=${pokemon.sprite} alt="${pokemon.name} image" class="card__image">
  <div class="card__heading" style="text-transform: capitalize">${
    pokemon.name
  }</div>
    <div class="card__text style="text-align:left">${pokemon.name} (#${
    pokemon.id
  }) is a ${pokemon.types.join(" & ")}pokemon.</div></div>
    
  </div>`;
});
