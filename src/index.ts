let contador: number = 1;
let clave: string;

while (contador <= 3 && clave != "eureka") {
  clave = prompt("clave");
  contador++;
}
if (clave == "eureka") {
  console.log("clave correcta");
} else {
  console.log("ya no tienes intentos");
}
