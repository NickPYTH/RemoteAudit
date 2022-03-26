import { call, put, takeEvery } from "redux-saga/effects";
import {FETCH_GET_COMPANY_DOCUMENTS} from "../../store/types/companyTypes";
import {setCompanyDocuments} from "../../store/actions/companyActions";

const request = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/profiles/get-company-documents", requestOptions)
};

function* fetchGetCompanyDocumentsWorker() {
    const data = yield call(request);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setCompanyDocuments(json))
}

export function* fetchGetCompanyDocumentsWatcher() {
    yield takeEvery(FETCH_GET_COMPANY_DOCUMENTS, fetchGetCompanyDocumentsWorker);
}
