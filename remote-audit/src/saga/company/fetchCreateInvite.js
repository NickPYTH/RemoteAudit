import { call, put, takeEvery } from "redux-saga/effects";
import {FETCH_CREATE_INVITE} from "../../store/types/companyTypes";
import {setInviteCode, setIsCodeLoading} from "../../store/actions/companyActions";

const request = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/profiles/create-invite", requestOptions)
};

function* fetchCreateInviteWorker() {
    yield put(setIsCodeLoading(true))
    const data = yield call(request);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setInviteCode(json.code))
    yield put(setIsCodeLoading(false))
}

export function* fetchCreateInviteWatcher() {
    yield takeEvery(FETCH_CREATE_INVITE, fetchCreateInviteWorker);
}
