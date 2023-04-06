const number = 24; //Número a descomponer en factores primos.
let counter = 2; //Primer primo.
const factoresPrimos = []; /* [{"2", 3}, {"3", 1}] */ 


const descomponerEnPrimos = (number) =>{
    if(esNumeroPrimo(counter)){
        if(number % counter === 0){
           number /= counter;
           registrarPrimo();
        }else counter++
    }else { 
        counter++;
    }
   
    if(number>1 && counter <= number) descomponerEnPrimos(number);
}

const esNumeroPrimo = (numero) =>{
    if (numero == 0 || numero == 1 || numero == 4) return false;

    for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}

    return true;
}

const registrarPrimo = () =>{
    if(factoresPrimos.length===0 || !factoresPrimos.find((el) => el.counter === counter)){
        factoresPrimos.push({
            counter,
            exponent: 1
        });
    }else{
        const index = factoresPrimos.findIndex((el) => el.counter === counter);
        factoresPrimos[index].exponent += 1; 
    }
}

descomponerEnPrimos(number);

console.log("La descomposición del número", number, "en primos es... ");
factoresPrimos.forEach((factor) =>{
    console.log(factor.counter + " con exponente " + factor.exponent)
})
console.log("Para conseguir el número ", number, " nuevamente, eleve cada número a su exponente, y luego multiplíquelos.")

