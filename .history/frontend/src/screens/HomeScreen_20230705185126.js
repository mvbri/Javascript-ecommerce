const HomeScreen = {
	render: () => {
		return `
            <ul class="products">
                ${products.map(
									(product) => `
                    <li>
                        <div class="product">
                            <a href="#"></a>
                        </div>
                    </li>
                `
								)}
            </ul>
        `;
	},
};
