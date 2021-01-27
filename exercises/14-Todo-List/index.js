// Your code here
let add = document.querySelector("#addToDo");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".fa-trash");

add.addEventListener("keydown", event => {
	if (event.key == "Enter") {
		let li = document.createElement("li");
		let span = document.createElement("span");

		span.innerHTML = `<i class="fa fa-trash"></i> ${event.target.value}`;
		li.appendChild(span);
		ul.appendChild(li);
	}
});

for (let i = 0; i < del.length; i++) {
	del[i].addEventListener("click", event => {
		let li = del[i].parentElement.parentElement;
		li.parentElement.removeChild(li);
	});
}
