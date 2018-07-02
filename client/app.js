import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './views/App.jsx';

// 这里判断是否是web浏览器环境，若是node服务端环境，可能document会报错，或者用ReactDOM.hydrate()
// if (typeof window !== 'undefined') {
// 	ReactDOM.render(<App />, document.getElementById('root'));
// }

const root = document.getElementById('root');

const render = (Component) => {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		root
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		const NextApp = require('./views/App.jsx').default;
		render(NextApp);
	});
}
