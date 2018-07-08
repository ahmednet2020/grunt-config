import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component
{
	render()
	{
		return (
			<div className="root">
				welcome react in grunt
			</div>
			)
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));