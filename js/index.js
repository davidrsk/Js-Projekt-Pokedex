"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

// alla 6 input-boxar
let inputBox = document.getElementById("pokemon-index")
let inputBox2 = document.getElementById("pokemon-index2")
let inputBox3 = document.getElementById("pokemon-index3")
let inputBox4 = document.getElementById("pokemon-index4")
let inputBox5 = document.getElementById("pokemon-index5")
let inputBox6 = document.getElementById("pokemon-index6")

// alla 6 img-sprites 
let outputBox1 = document.getElementById("output-box-1");
let sprite1 = document.getElementById("select-sprite-1");
let sprite2 = document.getElementById("select-sprite-2");
let sprite3 = document.getElementById("select-sprite-3");
let sprite4 = document.getElementById("select-sprite-4");
let sprite5 = document.getElementById("select-sprite-5");
let sprite6 = document.getElementById("select-sprite-6");


//uppdaterar varje sprite beroende på vald siffra
inputBox.oninput = function(){
    updateSprite1(inputBox.value);
}

inputBox2.oninput = function(){
    updateSprite2(inputBox2.value);
}

inputBox3.oninput = function(){
    updateSprite3(inputBox3.value);
}

inputBox4.oninput = function(){
    updateSprite4(inputBox4.value);
}

inputBox5.oninput = function(){
    updateSprite5(inputBox5.value);
}

inputBox6.oninput = function(){
    updateSprite6(inputBox6.value);
}

// alla 6 funktioner för att hämta och lagra sprite-gif i img src:

//1st
function updateSprite1(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url); //hämtar url, stoppas i serverResponse

 serverResponse.then(response=>response.json()).then(data=>{ 
  // när vi hämtat url, lagra i 'response' som tolkas om till json-objekt
  // när vi har json-objekt, lagra i 'data'

    sprite1.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
} // i <img id="sprite"> och dess källa lägger vi url + hela pathen till sprite-gifen

//2nd
function updateSprite2(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json()).then(data=>{ 
    sprite2.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}

//3rd
function updateSprite3(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json()).then(data=>{ 
    sprite3.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}

//4th
function updateSprite4(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json()).then(data=>{ 
    sprite4.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}

//5th
function updateSprite5(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json()).then(data=>{ 
    sprite5.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}

//6th
function updateSprite6(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json()).then(data=>{ 
    sprite6.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}


/* Hade alternativt kunnat skrivas:
    serverResponse är en promise
 .then är när vi fått datan vi bett om, lagras i response. => function(response) { return response.json()}



/*let xhr = new XMLHttpRequest(); //skapar objektet

xhr.open("GET", url);

xhr.responseType = "json";*/
