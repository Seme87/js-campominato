
//SALVO IN UNA VARIABILE IL CONTENITORE DELL'ELEMENTO CREATO CON IL CICLO FOR
const boardContainer = document.querySelector(".board")

for( i= 1; i <= 100; i++ ){
    //CREO ELEMENTO IN JS
    const boardCell= document.createElement("div");
    // INSERISCO ALLINTERNO IL VALORE I DEL CICLO FOR
    boardCell.innerHTML=i;
    //ASSEGNO UNA CLASSE ALL'ELEMENTO
    boardCell.classList.add("board-number")
    // AGGIUNGO EVENTO CLICK
    boardCell.addEventListener("click", function(){
        //AGGIUNG ALL'ELEMENTO CLICCATO LA CLASSE PER IL BG
        this.classList.add("bg-this")
        //MESSAGGIO IN CONSOLE CON N DI CELLA CLICCATA
        console.log(this.innerHTML)
    })
    // VADO AD APPENDERE L'ELEMENTO CREATO IN JS IN HTML
    boardContainer.append(boardCell);

}