import React, { Component } from "react"
import useSheet from "react-jss"

import OverviewComponent from "./OverviewComponent/OverviewComponent"

import styles from "./styles/"

@useSheet(styles)
class DashboardComponent extends Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<div className={classes.pageHeader}>
					<div>
						<h2>React Next Boilerplate</h2>
						<div>React Boilerplate with latest and battle tested stack</div>
					</div>
					<div>Button</div>
				</div>
				<div className={classes.pageCard}>
					{Array.from({ length: 5 }, (v, i) => (
						<OverviewComponent gridColumn={i === 0 ? "2fr" : null} key={i} />
					))}
				</div>
			</div>
		)
	}
}

export default DashboardComponent
