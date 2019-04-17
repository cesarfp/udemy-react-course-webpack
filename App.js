import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Users from './components/Users'
import Pizza from './components/Pizza'
import asyncComponent from './hoc/asyncComponent'

const AsyncPizza = asyncComponent(()=>{
	return import('./containers/Pizza.js')
})

class App extends Component {

	render() { 
		return(
			<div>
				<div>
					<Link to="/">Users</Link>
					<Link to="/pizza">Pizza</Link>
				</div>
				<div>
					<Route path="/" exact component={Users}></Route>
					<Route path="/pizza" exact component={AsyncPizza}></Route>
				</div>
			</div>
		)
	}
}

export default App