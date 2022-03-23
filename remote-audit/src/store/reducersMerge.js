import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/authReducer";
import { rootWatcher } from "../saga/mergeSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
