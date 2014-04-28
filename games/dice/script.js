


function play1go(btnElem){
	var r = Math.floor((Math.random() * 12) + 1);
	document.getElementById("pl1res").innerHTML = r;
	// btnElem.innerHTML = "Player1 gets " + r;
}

function play2go(btnElem){
	var r = Math.floor((Math.random() * 12) + 1);
	document.getElementById("pl2res").innerHTML = r;
	// btnElem.innerHTML = "Player1 gets " + r;
}