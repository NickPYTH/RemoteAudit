import { all } from "redux-saga/effects";
import { fetchCompanyRegisterWatcher } from "./auth/fetchCompanyRegister";
import { fetchAuditorCompanyRegisterWatcher } from "./auth/fetchAuditorCompanyRegister";
import { fetchLoginWatcher } from "./auth/fetchLogin";
import { fetchGetProfileWatcher } from "./auth/fetchGetProfile";
import {fetchGetCompanyDocumentsWatcher} from "./company/fetchGetCompanyDocuments";
import {fetchLoadDocumentWatcher} from "./company/fetchLoadDocument";
import {fetchCreateInviteWatcher} from "./company/fetchCreateInvite";
import {fetchAddCompanyWatcher} from "./auditor/fetchAddCompany";
import {fetchCompaniesListWatcher} from "./auditor/fetchCompaniesList";
import {fetchCompanyDocumentsWatcher} from "./auditor/fetchCompanyDocuments";
import {fetchUpdateDocumentInfoWatcher} from "./auditor/fetchUpdateDocumentInfo";

export function* rootWatcher() {
    yield all([
        fetchCompanyRegisterWatcher(),
        fetchAuditorCompanyRegisterWatcher(),
        fetchLoginWatcher(),
        fetchGetProfileWatcher(),
        fetchGetCompanyDocumentsWatcher(),
        fetchLoadDocumentWatcher(),
        fetchCreateInviteWatcher(),
        fetchAddCompanyWatcher(),
        fetchCompaniesListWatcher(),
        fetchCompanyDocumentsWatcher(),
        fetchUpdateDocumentInfoWatcher()
    ]);
}
