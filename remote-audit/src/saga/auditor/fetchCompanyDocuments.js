import { call, put, takeEvery } from "redux-saga/effects";
import {setActiveCompanyDocuments, setCompaniesList} from "../../store/actions/auditorActions";
import {FETCH_COMPANY_DOCUMENTS} from "../../store/types/auditorTypes";

const request = (name) => {
    console.log(name.name)
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("access")}`);

    let formData = new FormData();
    formData.append("name", name.name);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    return fetch("http://127.0.0.1:8000/profiles/get-company-documents-to-auditor", requestOptions)
};

function* fetchCompanyDocumentsWorker(info) {
    const data = yield call(request, info);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setActiveCompanyDocuments(json))
}

export function* fetchCompanyDocumentsWatcher() {
    yield takeEvery(FETCH_COMPANY_DOCUMENTS, fetchCompanyDocumentsWorker);
}
