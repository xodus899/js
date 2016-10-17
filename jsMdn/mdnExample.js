// function to create a paragraph once a button is clicked/add the text.

function createParagraph() {
	var para = document.createElement('p');
	para.textContent = "You clicked the button!" + " It works!";

	document.body.appendChild(para);
}

var buttons = document.querySelectorAll("button");

for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click",createParagraph);
}



