$(document).ready(function(){	

	/* QUESTION 1 ************/
	
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}


    /* QUESTION 2 ************/
    // Same as above except output second to last char of a input string

	document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(text.length-2);
	}


	/* QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not

	document.getElementById('checkWork_submit').onclick = function(){

		var paragraph = 'Flexitarian sustainable VHS, ramps flannel lumbersexual shabby chic venmo man bun blue bottle plaid synth viral. Austin quinoa fap iPhone banjo 3 wolf moon. Franzen williamsburg street art knausgaard synth literally, mumblecore sriracha scenester direct trade banjo bitters ugh. Forage hammock tilde taxidermy. Meh VHS occupy, asymmetrical helvetica pop-up next level poutine normcore. Flannel banh mi skateboard readymade, asymmetrical gluten-free chicharrones microdosing health goth. Pinterest normcore freegan gastropub pug.';
		// var paragraph = document.getElementById('check_paragraph').value;
		// console.log(paragraph);

		var word = document.getElementById('checkWork_input').value;
		var checkWord = paragraph.indexOf(word);

		if (checkWord > -1) {
			document.getElementById('checkWork_display').innerHTML = 'YES';
		} else {
			document.getElementById('checkWork_display').innerHTML = 'NO';
		}
	}

	/* QUESTION 4 ************/
	// Reverse string inputted by user

	document.getElementById('reverseString_submit').onclick = function() {

		var wordToReverse = document.getElementById('reverseString_input').value;

		var newString = ""; // Step 1. Create an empty string that will host the new created string

		for (var i = wordToReverse.length -1; i >= 0; i--) {
			newString = newString + wordToReverse[i]; // or newString += wordToReverse[i];
			document.getElementById('reverseString_display').innerHTML = newString;
		}		
		// return newString;
		// document.getElementById('reverseString_display').innerHTML = newString;

	}   // reference: https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb


	/* QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable

	document.getElementById('helloworld_submit').onclick = function(){

		var toOutput = 'hello world';
		document.getElementById('helloworld_display').innerHTML = toOutput.toUpperCase();
	
	}


	/* QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display

	document.getElementById('greet1_submit').onclick = function(){

		var nameToGreet = document.getElementById('greet1_input').value;
		document.getElementById('greet1_display').innerHTML = 'Hello ' + nameToGreet.toUpperCase() + ', welcome to the website!';
		
		// first letter initial
		// document.getElementById('greet1_display').innerHTML = 'Hello ' + nameToGreet.charAt(0).toUpperCase() + nameToGreet.slice(1) + ', welcome to the website!';

	}


	/* QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

	document.getElementById('greet2_submit').onclick = function(){

		var nameToGreet2 = document.getElementById('greet2_input').value.toUpperCase();

		(nameToGreet2 === 'ALICE') || (nameToGreet2 === 'BOB') || (nameToGreet2 === 'JOON')
		? document.getElementById('greet2_display').innerHTML = 'Hello ' + nameToGreet2 + ', welcome to the website!'
		: document.getElementById('greet2_display').innerHTML = 'no name found';

	}


	/* QUESTION 8 ************/
	// Accept two integers from the user and display the larger

	document.getElementById('integerMax_submit').onclick = function(){

		var num1 = document.getElementById('integerMax_input1').value;
		var num2 = document.getElementById('integerMax_input2').value;

		if ( num1 === num2 ) {
			document.getElementById('integerMax_display').innerHTML = 'Equal value';
		}
		else if ( num1 > num2) {
			document.getElementById('integerMax_display').innerHTML = 'Fisrt value ' + num1;
		}
		else {
			document.getElementById('integerMax_display').innerHTML = 'Second value ' + num2;
		}

	}


	/* QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)

	document.getElementById('integerSign_submit').onclick = function(){

		var num1 = document.getElementById('integerSign_input1').value;
		var num2 = document.getElementById('integerSign_input2').value;
		var num3 = document.getElementById('integerSign_input3').value;
		var productOfThree = num1 * num2 * num3;

		// console.log(productOfThree);

		if ( productOfThree === 0 ) {
			document.getElementById('integerSign_display').innerHTML = '0';
		} else if ( productOfThree > 0) {
			document.getElementById('integerSign_display').innerHTML = '+' + productOfThree;
		} else {
			document.getElementById('integerSign_display').innerHTML = '-' + productOfThree;
		}

	}


	/* QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest

	document.getElementById('integerSort_submit').onclick = function(){
		var a = document.getElementById('integerSort_input1').value;
		var b = document.getElementById('integerSort_input2').value;
		var c = document.getElementById('integerSort_input3').value;
		
		// console.log(a,b,c);

		function sort(){
			if ( a = b ) {
				if ( (a=c) && (b=c)){
					return 'Equal value'
				}
			} 


		}
		document.getElementById('integerSort_display').innerHTML = sort();





	}


	/* QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function

	document.getElementById('rps_submit').onclick = function(){

		var player1 = document.getElementById('rps_player1').value.toUpperCase();
		var player2 = document.getElementById('rps_player2').value.toUpperCase();
			
		function play(){	
			if (player1 === player2) {
				return "It's a tie!";
			}

			else if (player1 === "ROCK") {
				if (player2 === "SCISSORS") {
					return "Player 1 wins";
				}
				else {
					return "Player 2 wins";
				}
			}
			
			else if (player1 === "PAPER") {
				if (player2 === "ROCK") {
					return "Player 1 wins";
				}
				else {
					return "Player 2 wins";
				}				
			}
			
			else if (player1 === "SCISSORS") {
				if (player2 === "ROCK") {
					return "Player 1 wins";
				}
				else {
					return "Player 2 win";
				}
			}	
		}
		document.getElementById('rps_winner_display').innerHTML = play();

	}
		


	/* QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user

	document.getElementById('factoral_submit').onclick = function(){

		var n = Number(document.getElementById("factoral_input").value);
		var fact = 1;		
		for ( i = 1; i <= n; i++ ) {
			fact = fact * i;
			console.log(fact);
		}  
		document.getElementById('factoral_display').innerHTML = fact;

	}


	/* QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				

	document.getElementById('star_submit').onclick = function(){

		var symbol = '*';
		var display = "";
		for (i = 0; i < 5; i += 1) {
			display = display + symbol + "<br>";
			document.getElementById('star_display').innerHTML = display;
		}
	
	}


	/* QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	document.getElementById('base_exp_submit').onclick = function(){

		var a = document.getElementById('base_input').value;
		var b = document.getElementById('exp_input').value;

		document.getElementById('base_exp_display').innerHTML = Math.pow(a, b);

	}


	/* QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"


	document.getElementById('foobar_submit').onclick = function(){

		/* ATTEMPT 1, not working ******/
		
		// var numDisplay = "";
		// for (i = 0; i <= 10; i += 1) {
		// 	if ( i % 3 !== 0) {
		// 		numDisplay = numDisplay + i + "<br>";
		// 		document.getElementById('foobar_display').innerHTML = numDisplay;
		// 	} else {
		// 		document.getElementById('foobar_display').innerHTML = 'foo';
		// 	}
			
		// }

		/* ATTEMPT 2 ******/
		var numDisplay = [];
		for (i = 1; i <= 100; i += 1) {
			if (i % 3 == 0) {
				numDisplay[i] = 'Foo';
			} else if (i % 5 == 0) {
				numDisplay[i] = 'Bar';
			} else if (i % 3 == 0 && i % 5 == 0 ) {
				numDisplay[i] = 'FooBar';
			} else {
				numDisplay[i] = i;
			}
		}
		document.getElementById('foobar_display').innerHTML = numDisplay.slice(1,100);

	}


	/* QUESTION 16 ***********/

	document.getElementById('arrayname_submit').onclick = function(){

		var disciples = ['Matthew', 'Mark', 'Luke', 'John'];
		var nameDisplay = "";
		for (i = 0; i < disciples.length; i += 1) {
			nameDisplay = nameDisplay + disciples[i] + "<br>";
			document.getElementById('arrayname_display').innerHTML = nameDisplay;
		}

	}


	/* QUESTION 17 ***********/
	document.getElementById('car_submit').onclick = function(){

		var carProperties = [
			{ 'Make'  : 'Ford' },
			{ 'Year'  : '2008' },
			{ 'Color' : 'Tan'  },
		];

		// var carProperties = {
		// 	'Make' : 'Ford',
		// 	'Year' : 2008,
		// 	'Color' : 'Tan',
		// };
		
		for (i = 0; i <= carProperties.length; i += 1) {
			console.log(carProperties[i]);
			
			document.getElementById('car_display').innerHTML = carProperties[i];
		}
	}




});	
