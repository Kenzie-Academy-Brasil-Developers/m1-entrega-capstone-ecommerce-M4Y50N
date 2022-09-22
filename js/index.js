//add item in cart
let carrinho = document.querySelector(".cart__content");

//add item
let divTotal = document.querySelector(".total"),
	total = 0,
	vazio = document.querySelector(".vazio");

function addItem(item) {
	divTotal.classList.remove("hidden");

	try {
		carrinho.removeChild(vazio);
	} catch (e) {
		carrinho;
	}

	let id = item.id.substring(2),
		dataItem = data[id];

	// let repetidos = [];
	// carrinho.childNodes.forEach((x) => {
	// 	x.id != undefined ? repetidos.push(x.id) : x;
	// });

	carrinho.innerHTML += `
			<div id="d_${id}"  class="item__cart">
				<div class="item__cart__img bg-white">
					<img src="${dataItem.img}" alt="" />
				</div>
				<div class="info">
					<div class="item__cart__nome h4">${dataItem.nameItem}</div>
					<div class="item__cart__preco h4 teitemt-primary">R$ ${dataItem.value}</div>
					<div id="c_${id}"  class="remover small" onclick="rmItem(event.target)">Remover</div>
				</div>
			</div>`;

	total += dataItem.value;
	let qtdCarrinho = document.querySelector(".cart__content").childElementCount;
	document.querySelector(".quantidade").innerHTML = qtdCarrinho;

	document.querySelector(".preco__total").innerText = `R$ ${total}`;
}

//remove item
function rmItem(item) {
	let items = carrinho.children;

	for (let i = 0; items.length > i; i++) {
		if (items[i].id.substring(2) == item.id.substring(2)) {
			carrinho.removeChild(item.parentNode.parentNode);
			total -= data[item.id.substring(2)].value;
			document.querySelector(".preco__total").innerHTML = total;

			document.querySelector(".quantidade").innerHTML =
				document.querySelector(".cart__content").childElementCount;
			break;
		}
	}

	if (carrinho.childElementCount == 0) {
		divTotal.classList.toggle("hidden");
		carrinho.appendChild(vazio);
	}
}

let resultSearch = [],
	searchBar = document.getElementById("search__bar");

function renderiza(element) {
	let ul = document.querySelector(".ul__items");

	let li = document.createElement("li");
	li.classList.add("item");
	li.classList.add("card");
	li.classList.add("bg-gray-0");

	li.innerHTML = `
        <div class="card__head">
            <img src="${element.img}" alt="${element.nameItem}" />
        </div>
        <div class="card__body bg-white">
			<div>
				<div class="clas small bg-primary fw-bold">${element.tag}</div>
				<h3 class="title h3">${element.nameItem}</h3>
			</div>
            <p class="desc bodybold">
                ${element.description}
            </p>
			<div>
            	<p class="price fw-bold text-primary">R$ ${element.value}</p>
            	<a id="p_${element.id}" class="add__cart bodybold" onclick="addItem(event.target)"> ${element.addCart} </a>
			</div>
        </div>
    `;

	ul.appendChild(li);
}

function showCard() {
	let ul = document.querySelector(".ul__items");
	//renderizar produtos no html
	data.forEach((x) => {
		if (searchBar.value == "") {
			resultSearch.push(x);
		} else if (
			x.description.split(" ").filter((k) => {
				return k.toLowerCase() == searchBar.value.toLowerCase();
			}).length ||
			x.nameItem.split(" ").filter((k) => {
				return k.toLowerCase() == searchBar.value.toLowerCase();
			}).length ||
			x.tag.filter((k) => {
				return k.toLowerCase() == searchBar.value.toLowerCase();
			}).length
		) {
			resultSearch.push(x);
		}
	});

	ul.innerHTML = "";

	resultSearch.map((x) => {
		renderiza(x);
	});
	resultSearch = [];
}

searchBar.addEventListener("keypress", showCard, false);
searchBar.addEventListener("keyup", showCard, false);

document.addEventListener("DOMContentLoaded", showCard, false);
