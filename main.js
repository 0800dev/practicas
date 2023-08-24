let primeraCarta;
let segundaCarta;
do {
    primeraCarta = prompt("Ingrese su primera carta");
    alert("Tu primera carta es " + (primeraCarta));
}
while (isNaN(primeraCarta));

do {
    segundaCarta = prompt("Ingrese su segunda carta");
    alert("Tu segunda carta es " + (segundaCarta));
}
while (isNaN(segundaCarta));

(function sumarEnvido () {
     let envido = parseInt(primeraCarta) + parseInt(segundaCarta) + 20 ; 
        
        if (envido < 27) {
            alert("Que lo canten ellos");
        } else if (envido >= 27 && envido < 30) {
            alert("Envido!");
        }
        else if (envido >= 30) {
            alert("Falta Envido");
        }
    })();


