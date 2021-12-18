
var playNumber = document.querySelectorAll(".trun").length;

for (i = 0; i < playNumber; i++) {
	document.querySelectorAll(".trun")[i].addEventListener("click", function() {
			var playButton = this.innerHTML;
      makeAnimation(playButton);
			makeSound(playButton);
	});
}

function makeSound(key) {
	switch (key) {
			  case "q":
				  var plg1 = new Audio("./sounds/guitar (1).mp3");
				  plg1.play();
				  break;
				case "w":
					var plg2 = new Audio("./sounds/guitar (2).mp3");
					plg2.play();
					break;
				case "e":
					var plg3 = new Audio("./sounds/guitar (3).mp3");
					plg3.play();
					break;
				case "a":
					var plg4 = new Audio("./sounds/guitar (4).mp3");
					plg4.play();
					break;
				case "s":
					var pla1 = new Audio("./sounds/arph (1).mp3");
					pla1.play();
					break;
				case "d":
					var pla2 = new Audio("./sounds/arph (2).mp3");
					pla2.play();
					break;
				case "z":
					var pla3 = new Audio("./sounds/arph (3).mp3");
					pla3.play();
					break;
				default:
					console.log("Pressed: " + this.innerHTML + " button");
					break;
		}
}
function makeAnimation(currentKey) {
  var anim = document.querySelector("." + currentKey);

}
	document.addEventListener("keydown", function(event) {
		makeSound(event.key);
		makeAnimation(event.key);
	});
