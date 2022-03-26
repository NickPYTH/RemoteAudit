import {CompanySideMenu} from "../../Components/CompanyPage/CompanySideMenu";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {DocumentCard} from "../../Components/CompanyPage/DocumentsPage/DocumentCard";
import {AddDocumentCard} from "../../Components/CompanyPage/DocumentsPage/AddDocumentCard";
import {fetchLoadDocument} from "../../store/actions/companyActions";
import {useEffect, useState} from "react";
import {AddDocumentModal} from "../../Components/CompanyPage/DocumentsPage/AddDocumentModal";
import {fetchCompaniesList} from "../../store/actions/auditorActions";

const CompanyMainPageLayout = ({info, companyInfo, fetchLoadDocument, fetchCompaniesList}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div style={styles.wrapper}>
            <AddDocumentModal open={open} handleClose={handleClose}/>
            <CompanySideMenu />
            <div style={styles.documentListWrapper}>
                {companyInfo.documents && companyInfo.documents.map(document=>{
                    return(
                        <DocumentCard name={document.name} comment={document.comment} status={document.status} last_edit_date={document.last_edit_date} last_edit_by={document.last_edit_by}/>
                    )
                })}
                <AddDocumentCard fun={handleOpen} />
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    const info = state.authReducer;
    const companyInfo = state.companyReducer
    return { info, companyInfo };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchLoadDocument, fetchCompaniesList}, dispatch);

export const CompanyMainPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyMainPageLayout);

const styles = {
    wrapper: {
        display: "flex",
    },
    documentListWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};
