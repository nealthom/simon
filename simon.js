function Simon(){
	strict = false;
	count = 0;
	pSize = 0;
	cSize = 0;
	sequence = "";
	playerSequence = "";
	offset = 2000;
	lose = false;
	started = false;
	compTurn = true;
	restart = false;
	times = {'tl': 4180, 'tr': 4180, 'bl': 4700, 'br': 5230} ;
	
	this.start = function(){
		
		started = true;
		reset();
		play();
	}//  start

	function play(){
		
		
		computerTurn();
		
		
	
	}// play
	function computerTurn(){
			if( count >= 5){
				alert("Winner");
				reset();
				play();	
			}
			else{
			addSequence();
			playSequence();	
			incCount();
			}
			

	}//computerTurn

	
	function playSequence(){
	
		toPlay = sequence.match(/.{2}/g);
		var num = 0;
		var id = setInterval(function(){
				selectTrack(toPlay[num]);
				
				num++;
				if( num > toPlay.length ){
					
					playerTurn();
					clearInterval(id);
					
					//computerTurn();
				}
		}, 1000);
		
	}//play sequence
	
	function playerTurn(){
			
			
			compTurn = false;
			playerSequence = "";
			// enabling canclick and do more stuff there... See ya good night
			
		
			
	}// playerTurn();
	

	function addSequence(){
		var r = Math.floor(Math.random() * 4);
		
		
		switch( r ){
			case 0: sequence += 'tl';
				break;
			case 1: sequence += 'tr';
				break;
			case 2: sequence += 'bl';
				break;
			case 3: sequence += 'br';
				break;

		}// end switch
		cSize++;
	
	}// end add sequence
	

	function reset(){

			//strict = false;
			count = 0;
			document.getElementById('count').innerHTML = 0;
			sequence = "";
			playerSequence = "";
			lose = false;
			restart = false;
			

	}// end reset

	


	function playTl(){
			document.getElementById("tl").style.backgroundColor = "#58ba84";
			var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
			//audio.playbackRate = 0.5;duration = 0.417952
			audio.play();
			setTimeout(originalColors,500);
			
	}
	function playTr(){
		document.getElementById("tr").style.backgroundColor = "#c6363c";
			var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
			//audio.playbackRate = 0.5; duration = 0.417952			
			audio.play();
			setTimeout(originalColors,500);
		
	}
	function playBl(){
			document.getElementById("bl").style.backgroundColor = "#ead15f";
			var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
			//audio.playbackRate = 0.5; // duration = 0.470196		
			audio.play();
			setTimeout(originalColors,500);	
	}
	function playBr(){
			document.getElementById("br").style.backgroundColor = "#317bc6";
			var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
			//audio.playbackRate = 0.5; duration = 0.52244			
			audio.play();
			setTimeout(originalColors,500);	
	}

	function originalColors(){
		document.getElementById("tl").style.backgroundColor = "#00a74a";
		document.getElementById("tr").style.backgroundColor = "#9f0f17";
		document.getElementById("bl").style.backgroundColor = "#cca707";
		document.getElementById("br").style.backgroundColor = "#094a8f";

	} //end originalColors

	this.canClick = function( area ){
		if( started && !compTurn ){
		updatePs(area);
		switch( area ){
			case 'tl': playTl();
			break;
			case 'tr': playTr();
			break;
			case 'bl': playBl();
			break;
			case 'br': playBr();
			break;

		}

	}// end if

	if( checkPlayer() ){
		if(playerSequence.length == sequence.length){
				compTurn = true;
				computerTurn();

	}

		}
	else{
		document.getElementById('count').innerHTML = "!!";
		setTimeout(function(){ 
		document.getElementById('count').innerHTML = count
		if(strict){
			reset();
			play();
		}
		else{
			playSequence();
			playerTurn();

		}

		},2000);
		
		
	}// end of check
	
	}// end canClick

	function updatePs( area ){
			playerSequence += area;
			pSize++;
			
	}
	


	function checkPlayer(){
				
		return ( playerSequence === sequence.substr(0,playerSequence.length));		

	}//checkPlayer


	function selectTrack( val ){
			switch( val ){
			case 'tl': playTl();
				//	offset += 418;
			break;
			case 'tr': playTr();
				//	offset += 418;
			break;
			case 'bl': playBl();
				//	offset += 470;
			break;
			case 'br': playBr();
				//    offset += 523;
			break;

		}


	}//selectTrack

	this.toggleStrict = function(){

	if( strict ){
		strict = false;
		document.getElementById("strict").style.backgroundColor = "yellow";

	}

	else{
		strict = true;
		document.getElementById("strict").style.backgroundColor = "red";
	}

	

	}//toggle strict
		

	function incCount(){
		count++;
		document.getElementById("count").innerHTML = count;

	}// end incCount
}//Simon constructor

var simon = new Simon();

