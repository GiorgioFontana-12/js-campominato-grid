const griglia = document.getElementById("grid");
const play = document.getElementById("startGame")
const difficulty = document.getElementById("level")

// Griglia 10x10 = 100 elementi

 function sqareGen(gridPieces, totalPices) {
    for (let i = 0; i < totalPices; i++) {
    
        const nuovoDiv = document.createElement("div");

        nuovoDiv.classList.add(gridPieces);
        // nuovoDiv.classList.add("boxPiecesX100");
    
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
    console.log('You selected: ', difficultySelected);

    sqareGen(`boxPiecesX${difficultySelected}` , difficultySelected)
})

