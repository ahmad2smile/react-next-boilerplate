import * as types from "../../types/"

export const initialState = {
	schedulesRequest : "requesting",
	schedulesResponse: [],
	schedulesError   : ""
}

export default function schedulesReducer (state = initialState, action) {
	switch (action.type) {
		case types.SCHEDULES_REQUEST:
			return { ...state, schedulesRequest: "requested" }
		case types.SCHEDULES_REQUEST_SUCCESS:
			return {
				...state,
				schedulesRequest : "success",
				schedulesResponse: action.payload
			}
		case types.SCHEDULES_REQUEST_ERROR:
			return {
				...state,
				schedulesRequest: "error",
				schedulesError  : action.payload
			}
		case types.SCHEDULES_RESET:
			return { ...state, ...initialState }
		default:
			return state
	}
}
