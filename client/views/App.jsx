import React, { Component } from 'react';
import Routes from '../config/router';
import { Link } from 'react-router-dom';

class App extends Component {
	componentDidMount() {
		// do something
	}

	render() {
		return [
			<div key="banner">
				<Link to="/">首页</Link>
				<br />
				<Link to="/detail">详情页</Link>
			</div>,
			<Routes key="routers" />
		];
	}
}

export default App;
