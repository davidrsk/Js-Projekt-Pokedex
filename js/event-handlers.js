"use strict";
// https://pokeapi.co/

//TODO
// hämta http och lagra url i variabel
// fixa så att input-lådan påverkar pokémon sprite
// 

//----------------------------------------------------------

//uppdaterar varje sprite i resp box beroende på vald siffra
inputBox.oninput = function(){
    updateSprite1(inputBox.value);
};

inputBox2.oninput = function(){
    updateSprite2(inputBox2.value);
};

inputBox3.oninput = function(){
    updateSprite3(inputBox3.value);
};

inputBox4.oninput = function(){
    updateSprite4(inputBox4.value);
};

inputBox5.oninput = function(){
    updateSprite5(inputBox5.value);
};

inputBox6.oninput = function(){
    updateSprite6(inputBox6.value);
};

sprite1.onclick = function(){
    team1 = sprite1.innerHTML;
}