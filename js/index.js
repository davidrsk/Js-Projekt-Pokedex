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

// alla 6 img-sprites 
let sprite1 = document.getElementById("select-sprite-1");
let sprite2 = document.getElementById("select-sprite-2");
let sprite3 = document.getElementById("select-sprite-3");
let sprite4 = document.getElementById("select-sprite-4");
let sprite5 = document.getElementById("select-sprite-5");
let sprite6 = document.getElementById("select-sprite-6");

//alla 6 TEAM slots
let team1 = document.getElementsByClassName("team1");

// info-knappar
let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let info5 = document.getElementById("info5");
let info6 = document.getElementById("info6");

let outputBox1 = document.getElementById("output-box-1");

//outputBox1.innerText = console.log("Hej");

info1.onmouseover = function(idIndex){
    const url = new URL ("https://pokeapi.co/api/v2/pokemon/" + idIndex);

    const serverResponse = fetch(url);

 serverResponse.then(response=>response.json())
 .then(data=>{ 
     outputBox1.innerText = data.species.name;
     console.log(data)});
};







/* Hade alternativt kunnat skrivas:
    serverResponse är en promise
 .then är när vi fått datan vi bett om, lagras i response. => function(response) { return response.json()}



/*let xhr = new XMLHttpRequest(); //skapar objektet

xhr.open("GET", url);

xhr.responseType = "json";*/
