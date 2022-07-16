
// 1: Deine Funktion hier: 

const process1 = () => {
	let geheim = 'Morgen wird Benzinpreis erhöhen'
	const process2 = () => {
		return `${geheim}. Jetzt weiß alle.`
	}

	return process2
}

let ergebnis = process1()
console.log(ergebnis());


// 2: BONUS: Schreibe diesen Code um: 
const zähleBis50von = (number) => {
	if(number === 51){
		return 'Hör auf zu zählen.'
	}
    
	console.log(number);
	zähleBis50von(number + 1)

	
		
}
zähleBis50von(1);