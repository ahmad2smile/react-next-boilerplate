import React, { Component } from "react"
import useSheet from "react-jss"

import styles from "./styles/DashboardComponent.styles.js"

@useSheet(styles)
class DashboardComponent extends Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<h2>React Next Boilerplate</h2>
				<div>React Boilerplate with latest and battle tested stack</div>
			</div>
		)
	}
}

export default DashboardComponent
