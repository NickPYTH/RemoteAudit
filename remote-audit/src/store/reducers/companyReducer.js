import {
    SET_COMPANY_DOCUMENTS,
    SET_INVITE_CODE,
    SET_IS_CODE_LOADING,
    SET_IS_DOCUMENTS_LOADING
} from "../types/companyTypes";

const INITIAL_STATE = {
    documents: null,
    isDocumentsLoading: false,
    inviteCode: null,
    isCodeLoading: false
};

export const companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_IS_DOCUMENTS_LOADING:
            return {
                ...state,
                isDocumentsLoading: action.isLoading,
            }
        case SET_COMPANY_DOCUMENTS:
            return {
                ...state,
                documents: action.documents
            }
        case SET_INVITE_CODE:
            return {
                ...state,
                inviteCode: action.code
            }
        case SET_IS_CODE_LOADING:
            return {
                ...state,
                isCodeLoading: action.is_loading
            }
        default:
            return state
    }
}