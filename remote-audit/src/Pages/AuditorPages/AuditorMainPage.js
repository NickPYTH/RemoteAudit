import { SideMenu } from "../../Components/AuditorPage/SideMenu";
import { CompanyCard } from "../../Components/AuditorPage/CompanyPage/CompanyCard";
import { AddCompanyCard } from "../../Components/AuditorPage/CompanyPage/AddCompanyCard";
import { bindActionCreators } from "redux";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import {useEffect, useState} from "react";
import {AddCompanyModal} from "../../Components/AuditorPage/CompanyPage/AddCompanyModal";
import {fetchCompaniesList, setActiveCompany} from "../../store/actions/auditorActions";

const AuditorMainPageLayout = ({ info, auditor_info, fetchCompaniesList, setActiveCompany }) => {
    useEffect(()=>{
        fetchCompaniesList()
    }, [])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={styles.wrapper}>
            <AddCompanyModal open={open} handleClose={handleClose}/>
            <SideMenu />
            {auditor_info.companies &&
            auditor_info.companies.map((client) => {
                    return (
                        <CompanyCard
                            key={Math.random()}
                            name={client.name}
                            location={client.location}
                            fun={setActiveCompany}
                        />
                    );
                })}
            <AddCompanyCard fun={handleOpen} />
        </div>
    );
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    const auditor_info = state.auditorReducer
    return { info, auditor_info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchCompaniesList, setActiveCompany}, dispatch);

export const AuditorMainPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditorMainPageLayout);

const styles = {
    wrapper: {
        display: "flex",
    },
};
