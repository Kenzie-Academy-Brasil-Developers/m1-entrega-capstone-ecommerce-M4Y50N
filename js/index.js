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
			<div>
				<div class="clas small bg-primary fw-bold">${x.tag}</div>
				<h3 class="title h3">${x.nameItem}</h3>
			</div>
            <p class="desc bodybold">
                ${x.description}
            </p>
			<div>
            	<p class="price fw-bold text-primary">R$ ${x.value}</p>
            	<a id="p_${x.id}" class="add__cart bodybold"> ${x.addCart} </a>
			</div>
        </div>
    `;

	elementosLi.push(li);

	ul.appendChild(li);
});

let itemCarrinho = `
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
