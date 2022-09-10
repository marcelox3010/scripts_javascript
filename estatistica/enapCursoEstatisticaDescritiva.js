/*
 *
 * ESTATÍSTICA DESCRITIVA
 *
 */

function mggNumeroClasses(dados){

	return Math.ceil(Math.sqrt(dados.length));

}

function mggAmplitudeIntervaloClasses(amplitude, numeroClasses){

	return amplitude / (numeroClasses - 1);

}

function mggAmplitude(dados){

	let min = Math.min.apply(Math, dados);
	let max = Math.max.apply(Math, dados);

	return max - min;

}

function mggCalculaClasses(dados){

	let min = Math.min.apply(Math, dados);	
	let numeroClasses =  mggNumeroClasses(dados);
	let amplitude = mggAmplitude(dados);
	let amplitudeIntervaloClasses = mggAmplitudeIntervaloClasses(amplitude,numeroClasses);
	let classes = [];

	for(i = 0 ; i < numeroClasses ; i++){

		let limiteInferior = min - (amplitudeIntervaloClasses/ 2);
		let limiteSuperior = limiteInferior + amplitudeIntervaloClasses;
				
		classes.push([limiteInferior, limiteSuperior]);

		min = limiteSuperior + (amplitudeIntervaloClasses / 2);

	}

	return classes;

}

function mggQuadroFreqAbsoluta(dados){

	classes = mggCalculaClasses(dados);
	let freqAbsoluta = 0;
	
	for(let i = 0 ; i < classes.length ; i++){

		for(let j = 0 ; j < dados.length ; j++){

			if(

				dados[j] >= classes[i][0]
				&& dados[j] < classes[i][1]

			) freqAbsoluta++;
		
		}

		classes[i].push(freqAbsoluta);
		freqAbsoluta = 0;

	}

	return classes;

}

function mggQuadroFreqRelativa(dados){

	classes = mggCalculaClasses(dados);
	let freqAbsoluta = 0;
	
	for(let i = 0 ; i < classes.length ; i++){

		for(let j = 0 ; j < dados.length ; j++){

			if(

				dados[j] >= classes[i][0]
				&& dados[j] < classes[i][1]

			) freqAbsoluta++;
		
		}

		classes[i].push(freqAbsoluta / dados.length);
		freqAbsoluta = 0;

	}

	return classes;

}

let dados = [
	70.9
	,0.9
	,154.4
	,218.6
	,111.3
	,294.5
	,146.1
	,204.8
	,25
	,23.6
	,103.3
	,154.2
	,131.8
	,145.6
	,160.6
	,190.6
	,139.5
	,146.7
	,26.5
	,0.2
	,25.5
	,21.7
	,15.3
	,94.3
	,69.7
	,62.7
	,22.8
	,9.9
	,0
	,0.3
	,139.8
	,75.9
	,89.5
	,169.1
	,168.9
	,194.1
	,122.8
	,33.8
	,2.3
	,5.3];

console.log(dados);

let numeroClasses =  mggNumeroClasses(dados);
let amplitude = mggAmplitude(dados);
let amplitudeIntervaloClasses = mggAmplitudeIntervaloClasses(amplitude,numeroClasses);
let classes = mggCalculaClasses(dados);
let quadroFreqAbsoluta = mggQuadroFreqAbsoluta(dados);
let quadroFreqRelativa = mggQuadroFreqRelativa(dados);

console.log("Número de Classes: " + numeroClasses);
console.log("Amplitude: " + amplitude);
console.log("Intervalo de Classes: " + amplitudeIntervaloClasses);

console.log("--");
for(i = 0 ; i < numeroClasses ; i++) 
	console.log("Classes " + i + ": (" + classes[i][0] + "|->" + classes[i][1] + ")");

console.log("--");
for(i = 0 ; i < numeroClasses ; i++) 
	console.log(

		"Classes " + i + 
		": (" + quadroFreqAbsoluta[i][0] + "|->" + quadroFreqAbsoluta[i][1] + ") " +
		"Freq. Absoluta: " + quadroFreqAbsoluta[i][2]

	);

console.log("--");
let s = 0;
for(i = 0 ; i < numeroClasses ; i++){
	
	console.log(

		"Classes " + i + 
		": (" + quadroFreqRelativa[i][0] + "|->" + quadroFreqRelativa[i][1] + ") " +
		"Freq. Relativa.: " + quadroFreqRelativa[i][2]

	);

	s += quadroFreqRelativa[i][2];

}
console.log(s



)




