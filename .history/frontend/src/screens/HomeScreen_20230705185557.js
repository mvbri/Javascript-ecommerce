import products from '../data';

const HomeScreen = {
	render: () => {
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#/product/1">
                                <img src="${products.products[0].image}">
                            </a>
                        </div>
                    </li>
                `
								)}
            </ul>
        `;
	},
};
