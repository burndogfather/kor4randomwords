
fetch('https://cdn.jsdelivr.net/gh/squarehacker/kor4randomwords/resource/dataset.json')
.then((response) => response.json())
.then(function(data){
	
	let maxAdjective = Object.keys(data.adjective).length;
	let maxNoun = Object.keys(data.noun).length;
	let lengthNoun = maxNoun.length;
	let randAdjective, randNoun;
	
	setInterval(function(){ 
		
		randAdjective = Math.floor(Math.random() * maxAdjective);
		randNoun = Math.floor(Math.random() * maxNoun);
		
		document.querySelector('h1').innerText = data.adjective[randAdjective]+data.noun[randNoun];
		
	},50);
});
