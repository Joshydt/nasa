import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Profile from './profile';
import SearchForm from './form/index';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  results: {}
		};
	
		this.fetchResults = this.fetchResults.bind(this);
	}


	// Fetch the query results
	fetchResults = q => {
		fetch(`https://images-api.nasa.gov/search?&media_type=image&q=${q}`).then((res) => {
			if (res) {
				return res.json()
			}
		}).then((jsonObj) => {
			this.setState({
				results: jsonObj
			});
			console.log('this state = ', this.state);
		}).catch((err) => {
			console.error('couldn\'t fetch results, ', err);
			return;
		})
	}


	render() {
		return (
			<div id="app">
				{/* <Header /> */}
				<h1>Home</h1>
				<SearchForm func={this.fetchResults} />
			</div>
		);
	}
}
