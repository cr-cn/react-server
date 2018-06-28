import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// 这里判断是否是web浏览器环境，若是node服务端环境，可能document会报错，或者用ReactDOM.hydrate()
// if (typeof window !== 'undefined') {
// 	ReactDOM.render(<App />, document.getElementById('root'));
// }

ReactDOM.hydrate(<App />, document.getElementById('root'));
