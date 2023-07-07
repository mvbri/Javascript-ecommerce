import HomeScreen from './screens/HomeScreen.js';
import { parseRequestURL } from './utils.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404 from './screens/Error404.js';

const routes = {
	'/': HomeScreen,
	'/product/:id': ProductScreen,
};

const router = () => {
	const request = parseRequestURL();
	const parsedUrl =
		(request.resource ? `/${request.resource}` : '/') +
		(request.id ? `/:id` : '') +
		(request.action ? `${request.action}` : '');

	const screen = routes[parsedUrl] ? routes[parsedUrl] : Error404;

	const main = document.getElementById('main-container');
	main.innerHTML = screen.render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
