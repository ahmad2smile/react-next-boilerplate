import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/lib/storage"

import schedules from "./schedules/schedulesReducer"

// Setup for Redux Persist
export default persistCombineReducers(
	{
		key      : "root",
		storage  : storage,
		blacklist: []
	},
	{
		schedules
	}
)
