//add userName input Option;
//add reset button option; 

function rollDice() {
    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let dice1 = "images/dice"+ randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", dice1);

    let randomNumber2 = Math.floor(Math.random()*6) + 1;
    let dice2 = "images/dice"+ randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", dice2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
        t = parseInt(document.querySelector(".score-value-1").textContent) + 1;
        document.querySelector(".score-value-1").innerHTML = t;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins"
        t = parseInt(document.querySelector(".score-value-2").textContent) + 1;
        document.querySelector(".score-value-2").innerHTML = t;
    } else {
        document.querySelector("h1").innerHTML = "Draw"
    }
}

let btn = document.querySelector(".dice-roll");

btn.addEventListener("click", function() {
    rollDice();
});
