"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

//-----------------------------------------------------------------------------------------

// alla 6 funktioner för att hämta och lagra sprite-gif i img src:

//1st
function updateSprite(idIndex, pokeIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url); //hämtar url, stoppas i serverResponse

 serverResponse.then(response=>response.json())
 .then(data=>{ 
  // när vi hämtat url, lagra i 'response' som tolkas om till json-objekt
  // när vi har json-objekt, lagra i 'data'

    sprites[pokeIndex].src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    console.log(data)});
}; // i <img id="sprite1"> och dess källa lägger vi url + hela pathen till sprite-gifen


// funktion för att uppdatera info om varje pokémon

// 1st
function updateInfo(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
     infos[pokeIndex].innerText = "Name: " + data.name 
     + "\n" + "Type: " + data.types[0].type.name //(+ "/" + data.types[1].type.name) fel om pkmn bara har 1 type
     + "\n" + "Height: " + data.height + " dm"
     + "\n" + "Weight: " + data.weight + " lbs"});
};