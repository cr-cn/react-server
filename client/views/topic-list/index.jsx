import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import propTypes from 'prop-types';
import { AppState } from '../../store/app-state';

@inject('appState')
@observer
export default class TopicList extends Component {
	constructor() {
		super();
		//执行changeName的时候整个上下文已经不在组件内部了
		this.changeName = this.changeName.bind(this);
	}
	componentDidMount() {
		// do something here
	}

	changeName(event) {
		this.props.appState.changeName(event.target.value);
	}

	asyncBootstrap() {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.props.appState.count = 3;
				resolve(true);
			});
		});
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.changeName} />
				<span>{this.props.appState.msg}</span>
			</div>
		);
	}
}

TopicList.propTypes = {
	appState: propTypes.instanceOf(AppState)
};
