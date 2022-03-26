import { call, put, takeEvery } from "redux-saga/effects";
import {FETCH_COMPANIES_LIST} from "../../store/types/auditorTypes";
import {setCompaniesList} from "../../store/actions/auditorActions";

const request = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/profiles/get-companies-list", requestOptions)
};

function* fetchCompaniesListWorker() {
    const data = yield call(request);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setCompaniesList(json))
}

export function* fetchCompaniesListWatcher() {
    yield takeEvery(FETCH_COMPANIES_LIST, fetchCompaniesListWorker);
}
