import { call, takeLatest, put } from "redux-saga/effects"

import { requestSchedules } from "../../../services/dataService"

import * as types from "../../types/"

import {
	schedulesRequestSuccess,
	schedulesRequestError
} from "../../actions/schedules/schedulesActions"

export function * schedulesRequestSaga (action) {
	try {
		const response = yield call(requestSchedules, action.payload)
		yield put(schedulesRequestSuccess(response))
	} catch (err) {
		yield put(schedulesRequestError(err))
	}
}

export function * schedulesRequestSagaWatcher () {
	yield takeLatest(types.SCHEDULES_REQUEST, schedulesRequestSaga)
}
