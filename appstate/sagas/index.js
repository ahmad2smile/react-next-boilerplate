import { all } from "redux-saga/effects"

import { schedulesRequestSagaWatcher } from "./schedules/schedulesRequestSaga"

export default function * rootSaga () {
	yield all([schedulesRequestSagaWatcher()])
}
