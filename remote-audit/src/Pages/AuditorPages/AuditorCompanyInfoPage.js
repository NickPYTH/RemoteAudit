import { SideMenu } from "../../Components/AuditorPage/SideMenu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {useEffect, useState} from "react";
import {fetchCompaniesList, fetchCompanyDocuments, updateDocumentInfo} from "../../store/actions/auditorActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {DocumentCard} from "../../Components/AuditorPage/CompanyPage/DocumentCard";

const AuditorCompanyInfoPageLayout = ({ info, auditor_info, fetchCompaniesList, fetchCompanyDocuments, updateDocumentInfo }) => {
    useEffect(()=>{
        fetchCompanyDocuments(auditor_info.activeCompanyName)
    }, [])
    const company_info = auditor_info.companies.find(company=>company.name===auditor_info.activeCompanyName)
    return (
        <div style={styles.wrapper}>
            <SideMenu />
            <div style={styles.center}>
                <Card sx={{ width: 1100, height: 700, margin: "15px" }}>
                    <CardContent>
                        <div style={{display: 'flex'}}>
                            <div>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Компания
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.name}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Адресс
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.location}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Организационно-правовая форма
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.org_form}
                                </Typography>
                            </div>
                            <div style={{marginLeft: 35}}>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Виды деятельности
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.activities}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Дата свидетельства о государственной регистрации
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.reg_date}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Номер свидетельства о государственной регистрации
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {company_info && company_info.reg_number}
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                    <div style={{display: 'flex' }}>
                        {auditor_info.activeCompanyDocuments && auditor_info.activeCompanyDocuments.map(document=>{
                            return(
                                <DocumentCard updateDocument={updateDocumentInfo} name={document.name} status={document.status} comment={document.comment} last_edit_by={document.last_edit_by} last_edit_date={document.last_edit_date}/>
                            )
                        })}
                    </div>
                </Card>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    const auditor_info = state.auditorReducer
    return { info, auditor_info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchCompaniesList, fetchCompanyDocuments, updateDocumentInfo}, dispatch);

export const AuditorCompanyInfoPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditorCompanyInfoPageLayout);

const styles = {
    wrapper: {
        display: "flex",
    },
    center:
        {
            position: 'absolute',
            top: '50%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
        }
};
