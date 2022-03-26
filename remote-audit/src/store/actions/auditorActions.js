import {
    FETCH_ADD_COMPANY,
    FETCH_COMPANIES_LIST,
    FETCH_COMPANY_DOCUMENTS,
    SET_ACTIVE_COMPANY, SET_ACTIVE_COMPANY_DOCUMENTS,
    SET_COMPANIES_LIST, UPDATE_DOCUMENT_INFO
} from "../types/auditorTypes";

export const fetchAddCompany = (code) =>({
    type: FETCH_ADD_COMPANY,
    code
})

export const setCompaniesList = (companies) => ({
    type: SET_COMPANIES_LIST,
    companies
})

export const fetchCompaniesList = () => ({
    type: FETCH_COMPANIES_LIST,
})

export const setActiveCompany = (companyName) => ({
    type: SET_ACTIVE_COMPANY,
    companyName
})

export const fetchCompanyDocuments = (name) => ({
    type: FETCH_COMPANY_DOCUMENTS,
    name
})

export const setActiveCompanyDocuments = (documents) => ({
    type: SET_ACTIVE_COMPANY_DOCUMENTS,
    documents
})

export const updateDocumentInfo = (comment, status, documentName) => ({
    type: UPDATE_DOCUMENT_INFO,
    documentName, comment, status
})