let primeraCarta = 0;
let segundaCarta = 0;

do {
    primeraCarta = prompt("Ingrese su primera carta");
    console.log(primeraCarta);
}
while (isNaN(primeraCarta));

do {
    segundaCarta = prompt("Ingrese su segunda carta");
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


