import React, { Component } from "react"
import useSheet from "react-jss"

import styles from "./styles/"

@useSheet(styles)
class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = { location: "top" }
	}

	render() {
		const { children, classes } = this.props

		return <div className={classes.navbarContainer}>{children}</div>
	}
}

export default Navbar
