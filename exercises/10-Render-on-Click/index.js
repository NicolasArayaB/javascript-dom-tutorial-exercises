let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newDiv = document.createElement("div");
	newDiv.style.background = "yellow";
	newDiv.innerHTML = "Hello World";
	document.body.appendChild(newDiv);
});
