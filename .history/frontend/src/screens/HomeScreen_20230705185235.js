import data from '../data';

const HomeScreen = {
	render: () => {
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#/product/1"></a>
                        </div>
                    </li>
                `
								)}
            </ul>
        `;
	},
};
