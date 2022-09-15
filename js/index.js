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
            <div class="clas small bg-primary fw-bold">${x.tag}</div>
            <h3 class="title h3">${x.nameItem}</h3>
            <p class="desc bodybold">
                ${x.description}
            </p>
            <p class="price fw-bold text-primary">R$ ${x.value}</p>
            <a id="p_${x.id}" class="add__cart bodybold"> ${x.addCart} </a>
        </div>
    `;

	ul.appendChild(li);
});

//add produtos no carrinho
let addCartButtons = document.querySelectorAll(".add__cart");
let carrinho = document.querySelector(".cart__content");
let vazio = document.querySelector(".vazio");

addCartButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		let e = event.target;
		let idBtn = e.id;
		let id = parseInt(idBtn.substring(2));

		vazio.classList.add("hidden");

		data.forEach((x) => {
			if (x.id == id) {
				carrinho.innerHTML += `
                <div id="d_${x.id}"  class="item__cart">
                    <div class="item__cart__img bg-white">
                        <img src="${x.img}" alt="" />
                    </div>
                    <div class="info">
                        <div class="item__cart__nome h4">${x.nameItem}</div>
                        <div class="item__cart__preco h4 text-primary">R$ ${x.value}</div>
                        <div id="c_${x.id}"  class="remover small" onclick=remover()>Remover</div>
                    </div>
                </div>`;
			}
		});
	});
});

function remover() {
	let rmCart = document.querySelectorAll(".remover");

	rmCart.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			let e = event.target;
			let idBtn = e.id;
			let id = parseInt(idBtn.substring(2));

			for (let i = 0; i < carrinho.children.length; i++) {
				if (id == parseInt(carrinho.children[i].id.substring(2))) {
					carrinho.children[i].remove();
				}
			}
		});
	});
}
