"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

//----------------------------------------------------------

//uppdaterar varje sprite i resp box beroende på vald siffra
inputBox.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox2.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);

};

inputBox3.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox4.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox5.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);
};

inputBox6.oninput = function(e){
    updateSprite(e.target.value, e.target.pokeIndex);
};
/*--------------------------------------------------------------------*/

// visar pokémon info vid knapp-tryck
info1.onclick = function(){
    updateInfo(inputBox.value);
};
/*---------------------------------------------------------------------*/
