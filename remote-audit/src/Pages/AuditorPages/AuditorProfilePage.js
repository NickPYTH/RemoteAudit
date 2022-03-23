import {SideMenu} from "../../Components/AuditorPage/SideMenu";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {CardArrowBack} from "../../Components/AuthPageComponents/CardArrowBack";
import {Button, Paper, TextField} from "@mui/material";
import styled from "@emotion/styled";
import {useState} from "react";

const RegisterCard = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    height: 750,
    width: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
}));

const AuditorProfilePageLayout = ({}) => {
    const [auditorCompanyName, setAuditorCompanyName] = useState("");
    const [auditorCompanyLocation, setAuditorCompanyLocation] = useState("");
    const [auditorCompanyRegistrationDate, setAuditorCompanyRegistrationDate] =
        useState("");
    const [
        auditorCompanyRegistrationNumber,
        setAuditorCompanyRegistrationNumber,
    ] = useState("");
    const [auditorCompanyLicenceNumber, setAuditorCompanyLicenceNumber] =
        useState("");
    const [
        auditorCompanyLicenceRegistrationDate,
        setAuditorCompanyLicenceRegistrationDate,
    ] = useState("");
    const [
        auditorCompanyLicenceLicenceOrganisation,
        setAuditorCompanyLicenceLicenceOrganisation,
    ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div style={styles.wrapper}>
            <SideMenu />
            <div style={styles.wrapperCard}>
                <RegisterCard elevation={4}>
                    <CardArrowBack path="/register" />
                    <TextField
                        label="Название"
                        value={auditorCompanyName}
                        onChange={(e) => setAuditorCompanyName(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Адресс"
                        value={auditorCompanyLocation}
                        onChange={(e) => setAuditorCompanyLocation(e.target.value)}
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Дата свидетельства о государственной регистрации"
                        value={auditorCompanyRegistrationDate}
                        onChange={(e) =>
                            setAuditorCompanyRegistrationDate(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Номер свидетельства о государственной регистрации"
                        value={auditorCompanyRegistrationNumber}
                        onChange={(e) =>
                            setAuditorCompanyRegistrationNumber(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Номер лицензии"
                        value={auditorCompanyLicenceNumber}
                        onChange={(e) =>
                            setAuditorCompanyLicenceNumber(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Дата предоставлении лицензии"
                        value={auditorCompanyLicenceRegistrationDate}
                        onChange={(e) =>
                            setAuditorCompanyLicenceRegistrationDate(e.target.value)
                        }
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <TextField
                        label="Орган выдавший лицензию"
                        value={auditorCompanyLicenceLicenceOrganisation}
                        onChange={(e) =>
                            setAuditorCompanyLicenceLicenceOrganisation(
                                e.target.value
                            )
                        }
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
                        label="Повторите пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        style={{
                            marginBottom: 15,
                            width: 420,
                        }}
                    />
                    <Button
                        variant="outlined"
                        size="small"
                        style={{ paddingTop: 6 }}
                        onClick={() => {}}
                    >
                        Зарегистрироваться
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

export const AuditorProfilePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditorProfilePageLayout);

const styles = {
    wrapper: {
        display: "flex",
    },
    wrapperCard: {
        backgroundColor: "#f3f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight,
    }
};
