"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// lägga till vald pokemon-gif i 'TEAM' till höger
// visa info-text om vald pokémon, vid tryck på knapp

// alla 6 input-boxar för resp pokémon
let inputBox = document.getElementById("pokemon-index");
let inputBox2 = document.getElementById("pokemon-index2");
let inputBox3 = document.getElementById("pokemon-index3");
let inputBox4 = document.getElementById("pokemon-index4");
let inputBox5 = document.getElementById("pokemon-index5");
let inputBox6 = document.getElementById("pokemon-index6");

inputBox.pokeIndex = 0;
inputBox2.pokeIndex = 1;
inputBox3.pokeIndex = 2;
inputBox4.pokeIndex = 3;
inputBox5.pokeIndex = 4;
inputBox6.pokeIndex = 5;

let dexEntryIds = document.getElementsByClassName("dex-entry"); //gemensanmt namn för input-number

let sprites = document.getElementsByClassName("sprite"); //gemensamt namn för img src

let selectedPkmns = document.getElementsByClassName("selectPkmn"); //gemensamt namn för img src i aside

let buttons = document.getElementsByClassName("info-btn"); //gemensamt namn för buttons
let infos = document.getElementsByClassName("info"); //gemensamt namn för <p>

//
for (let i = 0; i < sprites.length; i++) {
  const sprite = sprites[i];

  sprite.onclick = function (e) {
    selectedPkmns[i].src = sprite.src;
  };
  sprite.pokeIndex = i;
}

for (let i = 0; i < selectedPkmns.length; i++) {
  selectedPkmns[i].pokeIndex = i;
}

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.onclick = function (e) {
    updateInfo(inputBox.value);
  };
}

// info-knappar
let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let info5 = document.getElementById("info5");
let info6 = document.getElementById("info6");
