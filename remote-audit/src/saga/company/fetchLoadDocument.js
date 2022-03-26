import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_GET_PROFILE } from "../../store/types/authTypes";
import {
    setAuditorProfile,
    setCompanyProfile,
    setEmployerProfile,
    setProfileType,
} from "../../store/actions/authActions";
import {FETCH_GET_COMPANY_DOCUMENTS, FETCH_LOAD_DOCUMENT} from "../../store/types/companyTypes";
import {fetchGetCompanyDocuments} from "../../store/actions/companyActions";

const request = (file, name) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let formData = new FormData();
    formData.append('file', file, `${name}.xlsx`);
    formData.append('name', name)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    return fetch("http://127.0.0.1:8000/profiles/load-document", requestOptions)
};

function* fetchLoadDocumentWorker(info) {
    const data = yield call(request, info.name, info.document);
    yield call(() => new Promise((res) => res(data.json())));
    yield put(fetchGetCompanyDocuments())
}

export function* fetchLoadDocumentWatcher() {
    yield takeEvery(FETCH_LOAD_DOCUMENT, fetchLoadDocumentWorker);
}
