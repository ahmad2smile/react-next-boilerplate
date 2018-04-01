import * as types from "../../types/"

export function schedulesRequest (period) {
	return {
		type   : types.SCHEDULES_REQUEST,
		payload: period
	}
}

export function schedulesRequestSuccess (res) {
	return {
		type   : types.SCHEDULES_REQUEST_SUCCESS,
		payload: res
	}
}

export function schedulesRequestError (err) {
	return {
		type   : types.SCHEDULES_REQUEST_ERROR,
		payload: err
	}
}

export function schedulesReset () {
	return {
		type: types.SCHEDULES_RESET
	}
}
