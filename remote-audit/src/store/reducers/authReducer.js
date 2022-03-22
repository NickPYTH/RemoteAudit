import {
    SET_AUDITOR_PROFILE, SET_COMPANY_PROFILE,
    SET_EMPLOYER_PROFILE,
    SET_IS_AUDITOR_COMPANY_REGISTER_LOADING,
    SET_IS_COMPANY_REGISTER_LOADING,
    SET_IS_LOGIN,
    SET_IS_LOGIN_LOADING, SET_PROFILE_TYPE
} from "../types/authTypes";

const INITIAL_STATE = {
    is_login: false,
    is_login_loading: false,
    is_company_register_loading: false,
    is_auditor_company_register_loading: false,
    profileType: null,
}


export const authReducer = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case SET_COMPANY_PROFILE:
            return {
                ...state,
                companyName: action.info.company_name,
                companyActivities: action.info.company_activities,
                companyDocuments: action.info.company_documents,
                companyLicenceRegistrationDate: action.info.company_licence_registration_date,
                companyLocation: action.info.company_location,
                companyOrganizationForm: action.info.company_organization_form,
                companyRegistrationNumber: action.info.company_registration_number,
                email: action.info.email
            }
        case SET_AUDITOR_PROFILE:
            return {
                ...state,
                clients: action.info.auditor_company_clients_companies,
                employers: action.info.auditor_company_employers,
                licenceOrganisation: action.info.auditor_company_licence_licenceOrganisation,
                licenceNumber: action.info.auditor_company_licence_number,
                licenceRegistrationDate: action.info.auditor_company_licence_registration_date,
                location: action.info.auditor_company_location,
                companyName: action.info.auditor_company_name,
                companyRegistrationDate: action.info.auditor_company_registration_date,
                companyRegistrationNumber: action.info.auditor_company_registration_number,
                email: action.info.email
            }
        case SET_EMPLOYER_PROFILE:
            return {
                ...state,
                // todo
            }
        case SET_PROFILE_TYPE:
            return {
                ...state,
                profileType: action.profileType
            }
        case SET_IS_LOGIN:
            return {
                is_login: action.is_login,
                ...state,
            }
        case SET_IS_LOGIN_LOADING:
            return {
                ...state,
                is_login_loading: action.is_loading,
            }
        case SET_IS_COMPANY_REGISTER_LOADING:
            return{
                is_company_register_loading: action.is_loading,
                ...state
            }
        case SET_IS_AUDITOR_COMPANY_REGISTER_LOADING:
            return{
                is_auditor_company_register_loading: action.is_loading,
                ...state
            }
        default:
            return state
    }
}