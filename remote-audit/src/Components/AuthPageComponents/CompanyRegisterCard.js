import { Button, Paper, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { CardArrowBack } from "./CardArrowBack";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useState } from "react";
import { fetchCompanyRegister } from "../../store/actions/authActions";

const RegisterCard = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    height: 750,
    width: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
}));

const CompanyRegisterCardLayout = ({ info, fetchCompanyRegister }) => {
    const [companyName, setCompanyName] = useState("");
    const [companyOrganizationForm, setCompanyOrganizationForm] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [companyRegistrationNumber, setCompanyRegistrationNumber] =
        useState("");
    const [companyLicenceRegistrationDate, setCompanyLicenceRegistrationDate] =
        useState("");
    const [companyActivities, setCompanyActivities] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const registerHandler = () => {
        fetchCompanyRegister({
            companyName,
            companyOrganizationForm,
            companyLocation,
            companyRegistrationNumber,
            companyLicenceRegistrationDate,
            companyActivities,
            email,
            password,
        });
    };
    return (
        <div style={styles.wrapper}>
            <RegisterCard elevation={4}>
                <CardArrowBack path="/register" />
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
                <TextField
                    label="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    style={{
                        marginBottom: 15,
                        width: 420,
                    }}
                />
                <TextField
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Повторите пароль"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    style={{
                        marginBottom: 15,
                        width: 420,
                    }}
                />
                <Button
                    onClick={() => registerHandler()}
                    variant="outlined"
                    size="small"
                    style={{ paddingTop: 6 }}
                >
                    Зарегистрироваться
                </Button>
            </RegisterCard>
        </div>
    );
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchCompanyRegister,
        },
        dispatch
    );

export const CompanyRegisterCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyRegisterCardLayout);

const styles = {
    wrapper: {
        backgroundColor: "#f3f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight,
    },
};
