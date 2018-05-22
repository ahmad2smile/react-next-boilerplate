export default {
	container: {
		background: "#E9E9E9",
		height: "1300px",
		padding: "3%"
	},
	pageHeader: {
		display: "flex",
		justifyContent: "space-between"
	},
	pageCardFirst: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		gridGap: "40px 50px",
		marginTop: "10px",
		gridAutoRows: "minmax(200px, auto)"
	},
	pageCardSecond: {
		display: "grid",
		gridTemplateColumns: "repeat(9, 1fr)",
		gridGap: "40px 50px",
		marginTop: "40px",
		gridAutoRows: "minmax(200px, auto)"
	}
}
