import data from '../data.js';

const HomeScreen = {
	render: () => {
		const { products } = data[0];
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#/product/${products._id}">
                                <img src="${products.image}">
                            </a>
                            <div class="product-name">
									<a class="link-title" href="/#/product/${products._id}">${products.name}</a>
							</div>
							<div class="product-brand">
								<p>${products.brand}</p>
							</div>
							<div class="product-price">
							    <p>
                                    $${products.price}
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

export default HomeScreen;
