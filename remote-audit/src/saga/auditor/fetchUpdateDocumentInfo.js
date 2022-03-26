import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_DOCUMENT_INFO} from "../../store/types/auditorTypes";
import {fetchCompaniesList} from "../../store/actions/auditorActions";

const request = (info) => {
    console.log(info)
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let formData = new FormData();
    formData.append("document_name", info.documentName);
    formData.append("status", info.status);
    formData.append("comment", info.comment ? info.comment : '');

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    return fetch("http://127.0.0.1:8000/profiles/update-document-info", requestOptions)
};

function* fetchUpdateDocumentInfoWorker(info) {
    yield call(request, info);
    yield put(fetchCompaniesList())
}

export function* fetchUpdateDocumentInfoWatcher() {
    yield takeEvery(UPDATE_DOCUMENT_INFO, fetchUpdateDocumentInfoWorker);
}
