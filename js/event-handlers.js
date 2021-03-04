"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// lägga till vald pokemon-gif i 'TEAM' till höger
// visa info-text om vald pokémon, vid tryck på knapp
//----------------------------------------------------------

//uppdaterar varje sprite i resp box beroende på vald index-siffra
inputBox.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox2.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox3.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox4.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox5.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox6.oninput = function (e) {
  updateSprite(e.target.value, e.target.pokeIndex);
};
