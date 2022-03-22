import {
    FETCH_AUDITOR_COMPANY_REGISTER,
    FETCH_COMPANY_REGISTER, FETCH_GET_PROFILE,
    FETCH_LOGIN, SET_AUDITOR_PROFILE, SET_COMPANY_PROFILE, SET_EMPLOYER_PROFILE,
    SET_IS_AUDITOR_COMPANY_REGISTER_LOADING,
    SET_IS_COMPANY_REGISTER_LOADING,
    SET_IS_LOGIN,
    SET_IS_LOGIN_LOADING, SET_PROFILE_TYPE,
} from "../types/authTypes";

export const setAuditorProfile = (info) => ({
    type: SET_AUDITOR_PROFILE,
    info
})

export const setCompanyProfile = (info) => ({
    type: SET_COMPANY_PROFILE,
    info
})

export const setEmployerProfile = (info) => ({
    type: SET_EMPLOYER_PROFILE,
    info
})

export const setProfileType = (profileType) => ({
    type: SET_PROFILE_TYPE,
    profileType
})

export const fetchGetProfile = () => ({
    type: FETCH_GET_PROFILE
})

export const setIsLogin = (is_login) => ({
    type: SET_IS_LOGIN,
    is_login
})

export const setIsLoginLoading = (is_loading) => ({
    type: SET_IS_LOGIN_LOADING,
    is_loading
})

export const setIsCompanyRegisterLoading = (is_loading) => ({
    type: SET_IS_COMPANY_REGISTER_LOADING,
    is_loading
})

export const setIsAuditorCompanyRegisterLoading = (is_loading) => ({
    type: SET_IS_AUDITOR_COMPANY_REGISTER_LOADING,
    is_loading
})

export const fetchLogin = (login, password) => ({
    type: FETCH_LOGIN,
    login,
    password
})

export const fetchCompanyRegister = (params) => ({
    type: FETCH_COMPANY_REGISTER,
    params
})

export const fetchAuditorCompanyRegister = (params) => ({
    type: FETCH_AUDITOR_COMPANY_REGISTER,
    params
})