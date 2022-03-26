import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/authReducer";
import { rootWatcher } from "../saga/mergeSagas";
import {companyReducer} from "./reducers/companyReducer";
import {auditorReducer} from "./reducers/auditorReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authReducer,
    companyReducer,
    auditorReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
