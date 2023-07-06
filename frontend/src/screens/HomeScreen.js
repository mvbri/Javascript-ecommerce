import data from '../data.js';

const HomeScreen = {
	render: () => {
		const { products } = data;
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#/product/${product._id}">
                                <img src="${product.image}">
                            </a>
                            <div class="product-name">
									<a class="link-title" href="/#/product/${product._id}">${product.name}</a>
							</div>
							<div class="product-brand">
								<p>${product.brand}</p>
							</div>
							<div class="product-price">
							    <p>
                                    $${product.price}
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
