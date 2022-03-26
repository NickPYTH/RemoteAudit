import {
    FETCH_CREATE_INVITE,
    FETCH_GET_COMPANY_DOCUMENTS,
    FETCH_LOAD_DOCUMENT,
    SET_COMPANY_DOCUMENTS, SET_INVITE_CODE, SET_IS_CODE_LOADING,
    SET_IS_DOCUMENTS_LOADING
} from "../types/companyTypes";

export const fetchGetCompanyDocuments = () => ({
    type: FETCH_GET_COMPANY_DOCUMENTS
})

export const setCompanyDocuments = (documents) => ({
    type: SET_COMPANY_DOCUMENTS,
    documents
})

export const setIsDocumentsLoading = (isLoading) => ({
    type: SET_IS_DOCUMENTS_LOADING,
    isLoading
})

export const fetchLoadDocument = (name, document) => ({
    type: FETCH_LOAD_DOCUMENT,
    document,
    name
})

export const fetchCreateInvite = () => ({
    type: FETCH_CREATE_INVITE,
})

export const setInviteCode = (code) => ({
    type: SET_INVITE_CODE,
    code
})

export const setIsCodeLoading = (is_loading) => ({
    type: SET_IS_CODE_LOADING,
    is_loading
})