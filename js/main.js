const griglia = document.getElementById("grid");
const play = document.getElementById("startGame")
const difficulty = document.getElementById("level")

 function sqareGen(gridPieces, totalPices) {
    griglia.innerHTML = "";
    for (let i = 0; i < totalPices; i++) {
        const nuovoDiv = document.createElement("div");

        nuovoDiv.classList.add("box", "flex", "alignItemCenter" , gridPieces);
        nuovoDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
        griglia.appendChild(nuovoDiv);
        nuovoDiv.innerHTML = i+1
    }
}
play.addEventListener("click", function() {
    var difficultySelected = difficulty.options[difficulty.selectedIndex].value;
    sqareGen(`PiecesX${difficultySelected}` , difficultySelected)
})