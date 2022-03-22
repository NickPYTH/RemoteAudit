import {call, put, takeEvery} from "redux-saga/effects";
import {FETCH_GET_PROFILE} from "../../store/types/authTypes";
import {
    setAuditorProfile,
    setCompanyProfile,
    setEmployerProfile,
    setProfileType
} from "../../store/actions/authActions";

const request = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access')}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/profiles/get-profile", requestOptions)
}

function* fetchGetProfileWorker() {
    const data = yield call(request);
    const json = yield call(() => new Promise((res) => res(data.json())))
    console.log(json)
    if (json.type==="company") {
        yield put(setProfileType("company"))
        yield put(setCompanyProfile(json))
    }
    else if (json.type==="auditor"){
        yield put(setProfileType("auditor"))
        yield put(setAuditorProfile(json))
    }
    else if (json.type==="employer"){
        yield put(setProfileType("employer"))
        yield put(setEmployerProfile(json))
    }

}

export function* fetchGetProfileWatcher() {
    yield takeEvery(FETCH_GET_PROFILE, fetchGetProfileWorker);
}