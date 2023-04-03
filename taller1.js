// Se definen las dos variables con valores

var a = 21

var b = 22

// Se utiliza el condicional si para imprimir la variable con el mayor valor

if (a > b) {

     console.log("El número a  " + a + " es mayor que b " + b );
  
} 

else if (b > a) {

     console.log("El número b " + b + " es mayor que a " + a );

} 

else {
     console.log("Los números son iguales");
}



// Ahora se definen tres variables y se les asigna valores


let c = 5;
let d = 18;
let e = 12;

// Se utiliza el condicional si para toma de decisiones e imprimir la variable con el mayor valor

if (c > d && c > e) {
  console.log("La variable c tiene el mayor valor: " + c);

} 

else if (d > c && d > e) {
  console.log("La variable d tiene el mayor valor: " + d);
}

else {
  console.log("La variable e tiene el mayor valor: " + e);

}


//Se prueba y queda ok