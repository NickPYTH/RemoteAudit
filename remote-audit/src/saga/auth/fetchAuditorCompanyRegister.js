import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_AUDITOR_COMPANY_REGISTER } from "../../store/types/authTypes";
import { setIsAuditorCompanyRegisterLoading } from "../../store/actions/authActions";

const fetchAuditorCompanyRegister = (info) => {
    let formData = new FormData();
    formData.append("username", info.auditorCompanyName);
    formData.append("password", info.password);
    formData.append("email", info.email);
    formData.append("type", "auditor");

    formData.append("auditor_company_name", info.auditorCompanyName);
    formData.append("auditor_company_location", info.auditorCompanyLocation);
    formData.append(
        "auditor_company_registration_date",
        info.auditorCompanyRegistrationDate
    );
    formData.append(
        "auditor_company_registration_number",
        info.auditorCompanyRegistrationNumber
    );
    formData.append(
        "auditor_company_licence_number",
        info.auditorCompanyLicenceNumber
    );
    formData.append(
        "auditor_company_licence_registration_date",
        info.auditorCompanyLicenceRegistrationDate
    );
    formData.append(
        "auditor_company_licence_licenceOrganisation",
        info.auditorCompanyLicenceLicenceOrganisation
    );

    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
    };
    return fetch(
        `http://localhost:8000/profiles/create-profile`,
        requestOptions
    );
};

function* fetchAuditorCompanyRegisterWorker(info) {
    yield put(setIsAuditorCompanyRegisterLoading(true));
    const data = yield call(fetchAuditorCompanyRegister, info.params);
    const json = yield call(() => new Promise((res) => res(data.json())));
    console.log(json);
    yield put(setIsAuditorCompanyRegisterLoading(false));
}

export function* fetchAuditorCompanyRegisterWatcher() {
    yield takeEvery(
        FETCH_AUDITOR_COMPANY_REGISTER,
        fetchAuditorCompanyRegisterWorker
    );
}
