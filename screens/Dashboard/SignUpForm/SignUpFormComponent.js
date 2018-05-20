import React, { Component } from "react"
import useSheet from "react-jss"

import styles from "./styles"

@useSheet(styles)
class SignUpFormComponent extends Component {
	constructor(props) {
		super(props)
		this.state = { remember: false }
	}
	
	render() {
		const { classes } = this.props

		return (
			<div className={classes.formContainer}>
				<h2>Sign Up</h2>
			</div>
		)
	}
}

export default SignUpFormComponent
