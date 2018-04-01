import React, { Component } from "react"
import useSheet from "react-jss"

import styles from "./styles/DashboardComponent.styles.js"

@useSheet(styles)
class DashboardComponent extends Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<div>DashboardComponent Here</div>
			</div>
		)
	}
}

export default DashboardComponent
