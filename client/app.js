import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line
import App from './App.jsx'; //eslint-disable-line

// 这里判断是否是web浏览器环境，若是node服务端环境，可能document会报错，或者用ReactDOM.hydrate()
// if (typeof window !== 'undefined') {
// 	ReactDOM.render(<App />, document.getElementById('root'));
// }

const root = document.getElementById('root'); //eslint-disable-line

const render = (Component) =>
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>, //eslint-disable-line
		root //eslint-disable-line
	); //eslint-disable-line

render(App); //eslint-disable-line

if (module.hot) {
	//eslint-disable-line
	module.hot.accept('./App.jsx', () => {
		//eslint-disable-line
		const NextApp = require('./App.jsx').default; //eslint-disable-line
		render(NextApp); //eslint-disable-line
	});
}
