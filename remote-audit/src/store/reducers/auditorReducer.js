import {
    SET_ACTIVE_COMPANY,
    SET_ACTIVE_COMPANY_DOCUMENTS,
    SET_COMPANIES_LIST,
} from "../types/auditorTypes";

const INITIAL_STATE = {
    companies: [],
    activeCompanyName: null,
    activeCompanyDocuments: null
};

export const auditorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_COMPANY_DOCUMENTS:
            console.log("dd",action.documents)
            return {
                ...state,
                activeCompanyDocuments: action.documents
            }
        case SET_ACTIVE_COMPANY:
            return{
                ...state,
                activeCompanyName: action.companyName,
            }
        case SET_COMPANIES_LIST:
            return {
                ...state,
                companies: action.companies
            }
        default:
            return state
    }
}