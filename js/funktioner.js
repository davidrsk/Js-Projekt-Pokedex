"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

//-----------------------------------------------------------------------------------------
// alla 6 funktioner för att hämta och lagra sprite-gif i img src:

//1st
function updateSprite1(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url); //hämtar url, stoppas i serverResponse

 serverResponse.then(response=>response.json())
 .then(data=>{ 
  // när vi hämtat url, lagra i 'response' som tolkas om till json-objekt
  // när vi har json-objekt, lagra i 'data'

    sprite1.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}; // i <img id="sprite"> och dess källa lägger vi url + hela pathen till sprite-gifen

//2nd
function updateSprite2(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
    sprite2.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
};

//3rd
function updateSprite3(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
    sprite3.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
};

//4th
function updateSprite4(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
    sprite4.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
};

//5th
function updateSprite5(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
    sprite5.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
};

//6th
function updateSprite6(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
    sprite6.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
};