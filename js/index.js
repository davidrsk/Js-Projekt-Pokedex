"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

// alla 6 input-boxar
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


let sprites = document.getElementsByClassName("sprite"); //alla sprites i <img>

let selectedPkmns = document.getElementsByClassName("selectPkmn"); // alla valda pokemon-sprites hamnar här i <img>

let buttons = document.getElementsByClassName("info-btn"); // alla knappar för info
let infos = document.getElementsByClassName("info");// info-texterna

for(let i = 0; i < sprites.length; i++){

    const sprite = sprites[i];

    sprite.onclick = function(e){
        selectedPkmns[i].src = sprite.src;
    }
    sprite.pokeIndex = i;
}

for(let i = 0; i < selectedPkmns.length; i++){
    selectedPkmns[i].pokeIndex = i;
}

for(let i = 0; i < buttons.length; i++){

    const button = buttons[i];

    button.onclick = function(e){

    }
}

// info-knappar
let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let info5 = document.getElementById("info5");
let info6 = document.getElementById("info6");








