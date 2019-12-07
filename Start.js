'use strict';

var stoplight = document.getElementById("stoplight");
var carOne = document.getElementById("car1"); 
var carTwo = document.getElementById("car2"); 
var winText = document.getElementById("winText");

function startRace(){
	changeColor();
	startMove();
}

function changeColor(){
	stoplight.style.background = "green";
}

function resetRace(){
	stoplight.style.background = "red";
	carOne.style.left = "10px";
	carTwo.style.left = "10px";
	winText.style.display ="none";
}

function startMove(){
	var carOnePosition = 10;
	var carTwoPosition = 10;
	var endPoint = 1050;
	
	while(carOnePosition < endPoint || carTwoPosition < endPoint){
		carOnePosition += Math.floor(Math.random()*10);
		carOne.style.left = (carOnePosition.toString()+"px");
		console.log("carOnePosition:"+carOnePosition);
		console.log(carOne.style.left);
		
		carTwoPosition+= Math.floor(Math.random()*10);
		carTwo.style.left = (carTwoPosition.toString()+"px");
		console.log("carTwoPosition:"+carTwoPosition);
		console.log(carTwo.style.left);
		
		if(carOnePosition >= endPoint){
			winText.innerHTML = "Car One Wins!";
			winText.style.display = "block";
			break;
		}
		else if(carTwoPosition >= endPoint){
			winText.innerHTML = "Car Two Wins!";
			winText.style.display = "block";
			break;
		}
	}
	
	
	
}
