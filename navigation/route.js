import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import DashboardComponent from "../screens/Dashboard/DashboardComponent"

import { Images } from "../theme/"

const MainRoute = () => (
	<Router>
		<div>
			<div>
				<a href="https://github.com/ahmad2smile/" target="_blank" rel="noopener noreferrer">
					<img src={Images.logo} alt="Logo" />
				</a>
				<ul id="nav-mobile">
					<li>
						<a>Dashboard</a>
					</li>
					<li>
						<a>Forms</a>
					</li>
					<li>
						<a>About</a>
					</li>
				</ul>
			</div>
			<div>
				<Route exact path="/" component={DashboardComponent} />
			</div>
		</div>
	</Router>
)

export default MainRoute
