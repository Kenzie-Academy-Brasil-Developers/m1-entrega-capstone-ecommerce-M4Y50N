//renderizar produtos no html
let ul = document.querySelector(".ul__items");
let elementosLi = [];

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

	elementosLi.push(li);

	ul.appendChild(li);
});

//add/rem produtos no carrinho
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
                        <div id="c_${x.id}"  class="remover small" >Remover</div>
                    </div>
                </div>`;
			}
		});

		let rmCart = document.querySelectorAll(".remover");

		rmCart.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				let e = event.target;
				let idBtn = e.id;
				let id = parseInt(idBtn.substring(2));

				for (let i = 0; i < carrinho.children.length; i++) {
					if (id == parseInt(carrinho.children[i].id.substring(2))) {
						carrinho.children[i].remove();
						break;
					}
				}
			});
		});
	});
});

//filtro
let navUl = document.querySelector(".nav__items ul ");

for (let i = 0; i < navUl.childElementCount; i++) {
	navUl.children[i].addEventListener("click", (event) => {
		let e = event.target;
		ul.innerHTML = "";
		if (e.innerText == "Acessórios") {
			data.forEach((x) => {
				if (x.tag == "Acessórios") {
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
				}
			});
		} else if (e.innerText == "Calçados") {
			data.forEach((x) => {
				if (x.tag == "Calçados") {
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
				}
			});
		} else if (e.innerText == "Camisetas") {
			data.forEach((x) => {
				if (x.tag == "Camisetas") {
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
				}
			});
		} else {
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
		}
	});
}

function pesquisar(pesquisa) {}
