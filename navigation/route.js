import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import useSheet from "react-jss"

import DashboardComponent from "../screens/Dashboard/DashboardComponent"

import { Images } from "../theme/"
import Navbar from "../components/Navbar/Navbar"

import styles from "./styles/"

const MainRoute = ({ classes }) => (
	<Router>
		<div>
			<Navbar>
				<a
					className={classes.logo}
					href="https://github.com/ahmad2smile/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Images.logo} alt="Logo" />
				</a>
				<div className={classes.route}>
					<a href="/">Dashboard</a>
				</div>
				<div className={classes.route}>
					<a href="/forms">Forms</a>
				</div>
				<div className={classes.route}>
					<a href="/about">About</a>
				</div>
			</Navbar>
			<div className={classes.content}>
				<Route exact path="/" component={DashboardComponent} />
			</div>
		</div>
	</Router>
)

export default useSheet(styles)(MainRoute)
