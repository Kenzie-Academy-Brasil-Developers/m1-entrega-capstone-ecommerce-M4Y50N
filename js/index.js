//renderizar produtos no html
let ul = document.querySelector(".ul__items");

data.forEach((x) => {
	let li = document.createElement("li");
	li.classList.add("item");
	li.classList.add("card");
	li.classList.add("bg-gray-0");

	li.innerHTML = `
        <div class="card__head">
            <img src="${x.img}" alt="${x.nameItem}" />
        </div>
        <div class="card__body bg-white">
			<div>
				<div class="clas small bg-primary fw-bold">${x.tag}</div>
				<h3 class="title h3">${x.nameItem}</h3>
			</div>
            <p class="desc bodybold">
                ${x.description}
            </p>
			<div>
            	<p class="price fw-bold text-primary">R$ ${x.value}</p>
            	<a id="p_${x.id}" class="add__cart bodybold" onclick="addItem(event.target)"> ${x.addCart} </a>
			</div>
        </div>
    `;

	ul.appendChild(li);
});

//add item in cart
let carrinho = document.querySelector(".cart__content");

//add item
let divTotal = document.querySelector(".total"),
	vazio = document.querySelector(".vazio");

function addItem(item) {
	divTotal.classList.remove("hidden");

	carrinho.removeChild(vazio);

	let id = item.id.substring(2),
		dataItem = data[id];

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
}

//remove item
function rmItem(item) {
	let items = carrinho.children;

	for (let i = 0; items.length > i; i++) {
		if (items[i].id.substring(2) == item.id.substring(2)) {
			carrinho.removeChild(item.parentNode.parentNode);
			break;
		}
	}

	if (carrinho.childElementCount == 0) {
		divTotal.classList.toggle("hidden");
		carrinho.appendChild(vazio);
	}
}
