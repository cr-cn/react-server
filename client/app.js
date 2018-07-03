import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import App from './views/App';

import appState from './store/app-state';

// 这里判断是否是web浏览器环境，若是node服务端环境，可能document会报错，或者用ReactDOM.hydrate()
// if (typeof window !== 'undefined') {
// 	ReactDOM.render(<App />, document.getElementById('root'));
// }

/* eslint-disable */
const root = document.getElementById('root');

const render = (Component) => {
	ReactDOM.hydrate(
		<AppContainer>
			<Provider appState={appState}>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</Provider>
		</AppContainer>,
		root
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./views/App', () => {
		const NextApp = require('./views/App').default;
		render(NextApp);
	});
}
/* eslint-enable */
