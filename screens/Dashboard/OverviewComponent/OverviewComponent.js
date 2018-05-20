import React, { Component } from "react"
import useSheet from "react-jss"

import styles from "./styles"

@useSheet(styles)
class OverviewComponent extends Component {
	constructor(props) {
		super(props)
		this.state = { remember: false }
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.overviewContainer}>
				<h2>Overview Component</h2>
			</div>
		)
	}
}

export default OverviewComponent
