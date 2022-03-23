import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_COMPANY_REGISTER } from "../../store/types/authTypes";
import { setIsCompanyRegisterLoading } from "../../store/actions/authActions";

const fetchCompanyRegister = (info) => {
    let formData = new FormData();
    formData.append("username", info.companyName);
    formData.append("password", info.password);
    formData.append("email", info.email);
    formData.append("type", "company");

    formData.append("company_name", info.companyName);
    formData.append("company_organization_form", info.companyOrganizationForm);
    formData.append("company_location", info.companyLocation);
    formData.append(
        "company_registration_number",
        info.companyRegistrationNumber
    );
    formData.append(
        "company_licence_registration_date",
        info.companyLicenceRegistrationDate
    );
    formData.append("company_activities", info.companyActivities);

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

function* fetchCompanyRegisterWorker(info) {
    yield put(setIsCompanyRegisterLoading(true));
    const data = yield call(fetchCompanyRegister, info.params);
    const json = yield call(() => new Promise((res) => res(data.json())));
    console.log(json);
    yield put(setIsCompanyRegisterLoading(false));
}

export function* fetchCompanyRegisterWatcher() {
    yield takeEvery(FETCH_COMPANY_REGISTER, fetchCompanyRegisterWorker);
}
