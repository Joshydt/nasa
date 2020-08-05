import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { SearchForm } from './form/index';
import Gallery from './grid/index';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  results: {}
		};
	
		this.fetchResults = this.fetchResults.bind(this);
	}


	// Fetch the query results
	fetchResults = (q, type) => {
		fetch(`https://images-api.nasa.gov/search?&media_type=${type}&q=${q}`).then((res) => {
			if (res) {
				return res.json()
			}
		}).then((jsonObj) => {
			// get items
			const { collection } = jsonObj;
			this.setState({
				results: collection.items ? collection.items : collection,
			});
			console.log('this state = ', this.state);
		}).catch((err) => {
			console.error('couldn\'t fetch results, ', err);
			return;
		})
	}


	render() {
		const { results } = this.state;

		return (
			<div id="app">
				{/* <Header /> */}
				<h1>Home</h1>
				<SearchForm func={this.fetchResults} />
				
				<Gallery images={results} />
			</div>
		);
	}
}
