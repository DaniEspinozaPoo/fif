
 
printArreglo(lista);

var buttonAdd = document.getElementById("js-add-button");
buttonAdd.addEventListener("click", addItem);

var buttonOrder = document.getElementById("js-order-button");
buttonOrder.addEventListener("click", sortItems);

function printArreglo(arreglo){
	var lista = document.getElementById("lista");
	lista.innerHTML = "";
	for (var i = arreglo.length - 1; i >= 0; i--) {
		var li = document.createElement("li");
		var ol = document.createElement("span");
		ol.setAttribute("contenteditable", true);
		li.setAttribute("data-id", i);
		ol.addEventListener("input", editItem);
		var texto = document.createTextNode(arreglo[i]);
		ol.appendChild(texto);
		li.appendChild(ol);
		li.appendChild(removeButton);

		lista.appendChild(li);
		removeButton.addEventListener("click", removeItem);

	}
}

function addItem(event){
	event.preventDefault();
	var item = document.getElementById("js-add-input").value;
	lista.push(item);
	printArreglo(lista);
}

function orderItems(event){
	event.preventDefault();
}

function editItem(event){
	var id = event.target.parentElement.getAttribute("data-id");
	lista[id]=event.target.innerText;
}

function sortItems(event){
	event.preventDefault();
	lista.sort();
	lista.reverse();
	printArreglo(lista);
}

