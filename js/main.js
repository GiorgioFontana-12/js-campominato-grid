const griglia = document.getElementById("grid");
const play = document.getElementById("startGame")

// Griglia 10x10 = 100 elementi

 function sqareGen(gridPieces) {
    for (let i = 0; i < 100; i++) {
    
        const nuovoDiv = document.createElement("div");

        nuovoDiv.classList.add(gridPieces);
        // nuovoDiv.classList.add("boxPiecesX100");
    
        nuovoDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
    
        griglia.appendChild(nuovoDiv);
    }
}

play.addEventListener("click", function() {
    sqareGen("boxPiecesX100")
})

