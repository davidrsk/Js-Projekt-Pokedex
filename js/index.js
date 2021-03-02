"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

let outputBox = document.getElementById("output-box");
let inputBox = document.getElementById("pokemon-index")
let sprite = document.getElementById("sprite");

inputBox.oninput = function(){
    updateSprite(inputBox.value);
}

function updateSprite(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url); //hämtar url, stoppas i serverResponse

 serverResponse.then(response=>response.json()).then(data=>{ //
    sprite.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)}); 
}

//sprites.versions.generation-v.black-white.animated.front_default;
    //serverResponse är en promise
// .then är när vi fått datan vi bett om, lagras i response. => function(response) { return response.json()}



/*let xhr = new XMLHttpRequest(); //skapar objektet

xhr.open("GET", url);

xhr.responseType = "json";*/
