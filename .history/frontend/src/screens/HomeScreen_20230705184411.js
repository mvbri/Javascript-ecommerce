const HomeScreen = {
	render: () => {
		return `
            <ul class="products">
                {products.map((product) => {
                    return (
                        <li></li>
                    )
                })}
            </ul>
        `;
	},
};
