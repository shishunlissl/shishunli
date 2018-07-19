import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './ErrorBoundary.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '@/store/store.js'
import Detail from '@/components/Detail.jsx'
import Register from '@/components/Register.jsx'
import Login from '@/components/Login.jsx'

function show () {
	ReactDOM.render(
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/detail' component={Detail} />
				    <Route path = "/" component = { App } />
			    </Switch>
			</Router>
		</ErrorBoundary>,
		document.getElementById('root')
	) 
}
show()

store.subscribe(show)