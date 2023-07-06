import data from '../data';

const HomeScreen = {
	render: () => {
		const { products } = data;
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#/product/${products[0]._id}">
                                <img src="${products[0].image}">
                            </a>
                            <div class="product-name">
									<a class="link-title" href="/#/product/${products.products[0]._id}">${products.products[0].name}</a>
							</div>
							<div class="product-brand">
								<p>${products[0].brand}</p>
							</div>
							<div class="product-price">
							    <p>
                                    $${products[0].price}
                                </p>
							</div>
                        </div>
                    </li>
                `
								)}
            </ul>
        `;
	},
};
