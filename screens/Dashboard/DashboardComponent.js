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
				<div className={classes.pageCardFirst}>
					{Array.from({ length: 2 }, (v, i) => (
						<OverviewComponent
							gridColumn={i === 0 ? "1 / 3" : i === 1 ? "3 / 5" : null}
							key={i}
						/>
					))}
				</div>
				<div className={classes.pageCardSecond}>
					<OverviewComponent gridColumn="1 / 4" />
					<OverviewComponent gridColumn="4 / 7" />
					<OverviewComponent gridColumn="7 / 10" />
				</div>
			</div>
		)
	}
}

export default DashboardComponent
