import { all } from "redux-saga/effects";
import {fetchCompanyRegisterWatcher} from "./auth/fetchCompanyRegister";
import {fetchAuditorCompanyRegisterWatcher} from "./auth/fetchAuditorCompanyRegister";
import {fetchLoginWatcher} from "./auth/fetchLogin";
import {fetchGetProfileWatcher} from "./auth/fetchGetProfile";


export function* rootWatcher() {
    yield all([
        fetchCompanyRegisterWatcher(),
        fetchAuditorCompanyRegisterWatcher(),
        fetchLoginWatcher(),
        fetchGetProfileWatcher()
    ]);
}