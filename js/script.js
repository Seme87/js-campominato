//CREO ARRAY CON LISTA BOMBE
const listbomb = [];
console.log(listbomb)
//DICHIARO UNA FUNZIONE CHE GENEREA UN NUMERO RANDOMICO
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// CREO UN CICLO DOVE GENERO 16 NUMERI RANDOMICI  CHE VANNO DA 1 A 100  
for(i= 1; i <= 16; i++){
    console.log(i)
    // INVOCO LA FUNZIONE DEL NUMERO RANDOMICO SALVANDOLA NELLA VARIABILE
    let numberRandom= getRndInteger(1, 100);
    //AGGIUNGO UNA CONDIZIONE CHE DETERMINA SE IL NUMERO GENERATO NON è PRESENTE NEL ARRAY LISTA BOMBE 
    if( listbomb.includes(numberRandom) === false){
        // SE LA CONDIZIONE è VERA ALLORA PUSHO IL NUMERO NELLA LISTA ARRAY BOMBE
        listbomb.push(numberRandom)
    }
}







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

         

        if( listbomb.includes(this.innerHTML)){
           
            this.classList.add("bg-bomb")
        }
        //AGGIUNG ALL'ELEMENTO CLICCATO LA CLASSE PER IL BG
        this.classList.add("bg-this")
        //MESSAGGIO IN CONSOLE CON N DI CELLA CLICCATA
        console.log(this.innerHTML)
    })
    // VADO AD APPENDERE L'ELEMENTO CREATO IN JS IN HTML
    boardContainer.append(boardCell);

}