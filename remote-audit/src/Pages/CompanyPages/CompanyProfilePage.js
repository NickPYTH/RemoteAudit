import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {CardArrowBack} from "../../Components/AuthPageComponents/CardArrowBack";
import {Button, Paper, TextField} from "@mui/material";
import styled from "@emotion/styled";
import {useState} from "react";
import {CompanySideMenu} from "../../Components/CompanyPage/CompanySideMenu";

const RegisterCard = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    height: 600,
    width: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
}));

const CompanyProfilePageLayout = ({info}) => {
    console.log(info)
    const [companyName, setCompanyName] = useState(info.companyName);
    const [companyOrganizationForm, setCompanyOrganizationForm] = useState(info.companyOrganizationForm);
    const [companyLocation, setCompanyLocation] = useState(info.companyLocation);
    const [companyRegistrationNumber, setCompanyRegistrationNumber] =
        useState(info.companyRegistrationNumber);
    const [companyLicenceRegistrationDate, setCompanyLicenceRegistrationDate] =
        useState(info.companyLicenceRegistrationDate);
    const [companyActivities, setCompanyActivities] = useState(info.companyActivities);
    const [email, setEmail] = useState(info.email);
    return (
        <div style={styles.wrapper}>
            <CompanySideMenu />
            <div style={styles.wrapperCard}>
                <RegisterCard elevation={4}>
                    <CardArrowBack path="/company-documents" />
                    <TextField
                        label="Название"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Организационно-правовая форма"
                        value={companyOrganizationForm}
                        onChange={(e) => setCompanyOrganizationForm(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Адресс"
                        value={companyLocation}
                        onChange={(e) => setCompanyLocation(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Номер свидетельства о государственной регистрации"
                        value={companyRegistrationNumber}
                        onChange={(e) =>
                            setCompanyRegistrationNumber(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Дата свидетельства о государственной регистрации"
                        value={companyLicenceRegistrationDate}
                        onChange={(e) =>
                            setCompanyLicenceRegistrationDate(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Виды деятельности"
                        value={companyActivities}
                        onChange={(e) => setCompanyActivities(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <Button
                        onClick={() =>{}}
                        variant="outlined"
                        size="small"
                        style={{ paddingTop: 6 }}
                    >
                        Сохранить изменения
                    </Button>
                </RegisterCard>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export const CompanyProfilePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyProfilePageLayout);

const styles = {
    wrapper: {
        display: "flex",
    },
    wrapperCard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: window.innerHeight,
    }
};
