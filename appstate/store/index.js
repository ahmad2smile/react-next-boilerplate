import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import Reactotron from "reactotron-react-js"
import { persistStore } from "redux-persist"
import sagaPlugin from "reactotron-redux-saga"

import rootReducer from "../reducers/"
import rootSaga from "../sagas/"

let sagaMiddleware = createSagaMiddleware()

function configureStore (initialState = {}) {
	const middlewares = [sagaMiddleware] // To use Reactron created sagaMiddleware or just simple one

	if (process.env.NODE_ENV === "development") {
		const sagaMonitor = Reactotron.configure().use(sagaPlugin())
		sagaMiddleware = createSagaMiddleware({ sagaMonitor })

		middlewares.push(sagaMiddleware)
		middlewares.push(require("redux-immutable-state-invariant").default()) // Imported as on Docs
	}

	return createStore(rootReducer, compose(applyMiddleware(...middlewares)))
}

export const store = configureStore()

// MUST initiate sagas after creating the store
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store) // For redux persist PersistGate
