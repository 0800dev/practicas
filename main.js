let primeraCarta = document.getElementById("carta1").value;;
let segundaCarta = 0;

do {
    alert(primeraCarta);
}
while (isNaN(primeraCarta));

do {
    segundaCarta = document.getElementById("carta2").value;
    console.log(segundaCarta);
}
while (isNaN(segundaCarta));

function sumarEnvido(primeraCarta, segundaCarta) {
    let envido = primeraCarta + segundaCarta + 20;
    alert(envido);
    if (envido < 27) {
        console.log("Que la canten ellos");
    } else if (envido >= 27 && envido < 30) {
        console.log("Envido!");
    }
    else if (envido > 30) {
        console.log("Real Envido");
    }
};


