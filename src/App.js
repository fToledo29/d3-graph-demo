import React, { Component } from 'react';
import D3Component from './d3Component/d3Graph';
import './App.css';

class App extends Component {
	state = {
		data: [12, 5, 6, 6, 9, 10],
		width: 700,
		height: 500,
		id: 'root'
	}

	render() {

		const airports = ['LAX', 'ATL', 'DFW', 'ORD', 'MEX', 'AMS', 'JFK', 'LOS', 'VKO', 'IST', 'LHR','AMS', 'CUN', 'BOM', 'TYO'];

		const routes = [
			['LAX', 'ORD'],
			['LAX', 'MEX'],
			['MEX', 'DFW'],
			['MEX', 'CUN'],
			['CUN', 'DFW'],
			['DFW', 'ATL'],
			['DFW', 'LOS'],
			['LOS', 'AMS'],
			['LOS', 'VKO'],
			['VKO', 'AMS'],
			['VKO', 'IST'],
			['IST', 'LHR'],
			['AMS', 'JFK'],
			['AMS', 'IST'],
			['LHR', 'JFK'],
			['JFK', 'ATL'],
			['JFK', 'ORD'],
			['ORD', 'ATL'],
			['ATL', 'LAX'],
			['ATL', 'AMS'],
		];

		return (
			<div className="App">
				<D3Component id="graphTest" airports={airports} routes={routes} />
			</div>
		);
	};
}

export default App;
