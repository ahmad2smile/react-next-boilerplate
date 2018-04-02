import React, { Component } from "react"
import useSheet from "react-jss"

import MainRoute from "./navigation/route"

import styles from "./App.styles"

@useSheet(styles)
class App extends Component {
	render() {
		return (
			<div>
				<MainRoute />
			</div>
		)
	}
}

export default App
