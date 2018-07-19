import React, { Component } from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom'

import '@/App.scss';
import Home from '@/components/Home.jsx'
import ListNNC from '@/components/ListNNC.jsx'
import ListBrandSale from '@/components/ListBrandSale.jsx'
import ListHotTop10 from '@/components/ListHotTop10.jsx'

class App extends Component {

	render() {
			return (
				<div className="container">
					<Switch>
						<Route path="/home" component={Home}/>
						<Route path="/listnnc" component={ListNNC}/>
						<Route path="/brandsale" component={ListBrandSale}/>
						<Route path="/hottop10" component={ListHotTop10}/>						
						<Redirect to={{pathname: "/home"}}/>
					</Switch>
				</div>
			)
	}
}

export default App;
