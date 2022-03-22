import {call, put, takeEvery} from "redux-saga/effects";
import {fetchGetProfile, setIsLoginLoading} from "../../store/actions/authActions";
import {FETCH_LOGIN} from "../../store/types/authTypes";

const request = ({login, password}) => {
    let formData = new FormData();
    formData.append("username", login);
    formData.append("password", password);

    let requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/auth/jwt/create/", requestOptions)
}

function* fetchLoginWorker(info) {
    yield put(setIsLoginLoading(true))
    const data = yield call(request, info.login, info.password);
    const json = yield call(() => new Promise((res) => res(data.json())))
    if (data.status===200){
        localStorage.setItem("refresh", json.refresh)
        localStorage.setItem("access", json.access)
        yield put(fetchGetProfile())
    }
    yield put(setIsLoginLoading(false))
}

export function* fetchLoginWatcher() {
    yield takeEvery(FETCH_LOGIN, fetchLoginWorker);
}