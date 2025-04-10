var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var image1 = "./dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", image1);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}

var image2 = "./dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", image2);