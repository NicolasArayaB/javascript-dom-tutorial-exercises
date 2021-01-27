window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let mySelect = document.querySelector("#mySelect");

	for (let i = 0; i < countries.length; i++) {
        let option = document.createElement("option");
        
        // el codigo funcion, con append o appendChild pero no se como lo quiere el test.

		option.appendChild(document.createTextNode(countries[i]));
		option.value = countries[i];
		mySelect.appendChild(option);
	}

	mySelect.addEventListener("change", event => alert(event.target.value));
};
