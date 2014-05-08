// Player 1 plays
var count = 0; // counter for tries, max 3
var sum = 0; // sum of all points for three rounds
function play1go(btnElem){ 
	// must make sure that the dice is thrown only 3 times
	count++;  // counting tries
	if (count <= 3){
	  // generating random number between 1 and 12,
	  // then show this number in the p with id=pl1res
	var r = Math.floor((Math.random() * 12) + 1);
	sum = sum + r;
	document.getElementById("pl1res").innerHTML = r + " " +count;
	
	// every throw has the corresponding entry in the table results
	switch(count)
	{
		case 1:
			document.getElementById("pl1rnd1score").innerHTML = r
			break;
		case 2:
			document.getElementById("pl1rnd2score").innerHTML = r
			break;
		case 3: 
			document.getElementById("pl1rnd3score").innerHTML = r
			// when the last 3rd round is played,
			// output Total score for player 1
	        document.getElementById("pl1TotalScore").innerHTML = sum;
			break;  
	}

	} else {
		document.getElementById("pl1resInfo").innerHTML = 
		"No more tries left!"
	};
}

// Player 2 plays
function play2go(btnElem){
	var r = Math.floor((Math.random() * 12) + 1);
	document.getElementById("pl2res").innerHTML = r;
	
}

