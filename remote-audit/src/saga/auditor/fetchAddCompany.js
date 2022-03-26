import { call, put, takeEvery } from "redux-saga/effects";
import {FETCH_ADD_COMPANY} from "../../store/types/auditorTypes";
import {fetchCompaniesList} from "../../store/actions/auditorActions";

const request = (code) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);
    let formData = new FormData();
    formData.append("code", code);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/profiles/accept-invite", requestOptions)
};

function* fetchAddCompanyWorker(info) {
    yield call(request, info.code);
    yield put(fetchCompaniesList())
}

export function* fetchAddCompanyWatcher() {
    yield takeEvery(FETCH_ADD_COMPANY, fetchAddCompanyWorker);
}
