//1 - 6 random number

var randomNumber1 = Math.floor(Math.random()*6)+1;

//dice1.png - dice6.png

var randomImage1 = "dice" + randomNumber1 +".png";

//image source images/dice1.png-dice6.png
var randomImageSource1 = "images/" + randomImage1;

//set attribute src to random image source

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice"+randomNumber2+".png";

var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomImage1 > randomImage2) {
    document.querySelector("h1").textContent="🙌player 1 won"
}

else if (randomImage2 > randomImage1) {
    document.querySelector("h1").textContent="player 2 won🙌"
}

else {
    document.querySelector("h1").textContent="Match Draw"
}


