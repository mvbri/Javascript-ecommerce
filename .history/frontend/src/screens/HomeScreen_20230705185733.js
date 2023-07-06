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
                            <div class="product-name">
									<a class="link-title" href="/#/product/1">${products.products[0].name}</a>
							</div>
							<div class="product-brand">
								<p>Nike</p>
							</div>
							<div class="product-price">
							<p>$59</p>
							</div>
                        </div>
                    </li>
                `
								)}
            </ul>
        `;
	},
};
