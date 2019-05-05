// Random color codes
let numSquares = 6;
let colors;
var pickedColor;
let squareColor = document.querySelectorAll(".square");
var attempt = document.querySelector("#attempt");
var h1 = document.querySelector("#hone");
let headerWrapper = document.querySelector(".header-wrapper");
let playAgain = document.querySelector("#replay");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
	}

function setupModeButtons() {
		for (var i = 0; i<modeButtons.length; i++) {
			  modeButtons[i].addEventListener("click", function(){
			  modeButtons[0].classList.remove("active");
			  modeButtons[1].classList.remove("active");
			  this.classList.add("active");
			  this.textContent==="Easy" ? numSquares = 3 : numSquares=6;
			  reset();
			 });
	}
	
	reset();
}

function setupSquares() {
	for (let i=0;i<squareColor.length; i++) {
	// add addEventListener
		squareColor[i].addEventListener("click", function() {
	    var clickedColor = this.style.backgroundColor;

	    // compare color to pickedColor
	    if(clickedColor === pickedColor) {
	    	changeColors(clickedColor);
	    	attempt.textContent="Correct!";
	    	playAgain.textContent="Play Again?";
	    	headerWrapper.style.backgroundColor=clickedColor;
	    }
		 else {
		 	this.style.backgroundColor="#232323";
		 	attempt.textContent="Try Again";
		 }
		});
	}
}

function changeColors(color) {
 for (let i=0;i<squareColor.length; i++) {
  	squareColor[i].style.backgroundColor=color;
 }	
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (let i=0; i< num; i++) {
    arr.push(randomColor());
 }
return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g= Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

playAgain.addEventListener("click", function() {
 reset();
});

function reset () {
	 colors=generateRandomColors(numSquares);
	 pickedColor=pickColor();
	 h1.textContent = pickedColor;
	 playAgain.textContent="New Colors";
	 attempt.textContent = "";
	 for (let i=0;i<squareColor.length; i++) {
	    if(colors[i]) {
	    	squareColor[i].style.display="block";
	    	squareColor[i].style.backgroundColor=colors[i];
	    }
	    else {
	    	squareColor[i].style.display="none";
	    }
	  
	}
	     headerWrapper.style.backgroundColor="steelblue";

	}























// Additional code for random colors
// let squareColor = document.querySelectorAll(".square");
// for (let i=0;i<squareColor.length; i++) {
// 	squareColor[i].style.backgroundColor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

// }
