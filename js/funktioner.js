"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// lägga till vald pokemon-gif i 'TEAM' till höger
// visa info-text om vald pokémon, vid tryck på knapp
//-----------------------------------------------------------------------------------------

//uppdaterar sprite beroende på index
function updateSprite(idIndex, pokeIndex) {
  const url = new URL("https://pokeapi.co/api/v2/pokemon/" + idIndex);

  const serverResponse = fetch(url); //hämtar url, stoppas i serverResponse

  serverResponse
    .then((response) => response.json())
    .then((data) => {
      // när vi hämtat url, lagra i 'response' som tolkas om till json-objekt
      // när vi har json-objekt, lagra i 'data'

      sprites[pokeIndex].src = // i <img class="sprite"> lägger vi url + hela pathen till sprite-gifen
        data.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_default;
      console.log(data);
    });
}

// funktion för att uppdatera info om varje pokémon
function updateInfo(idIndex) {
  const url = new URL("https://pokeapi.co/api/v2/pokemon/" + idIndex);

  const serverResponse = fetch(url);

  serverResponse
    .then((response) => response.json())
    .then((data) => {
      let info =
        "Name: " +
        data.name +
        "\n" +
        "Type: " +
        data.types[0].type.name + //(+ "/" + data.types[1].type.name) fel om pkmn bara har 1 type
        "\n" +
        "Height: " +
        data.height +
        " dm" +
        "\n" +
        "Weight: " +
        data.weight +
        " lbs";

      console.log(info);
    });
}
