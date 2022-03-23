import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import styled from "@emotion/styled";
import "./styles.css";
import DecorativeCard from "../../Components/AuthPageComponents/DecorateCardTopRight";
import DecorateCardTopLeft from "../../Components/AuthPageComponents/DecorateCardTopLeft";
import DecorateCardBottom from "../../Components/AuthPageComponents/DecorateCardBottom";
import { Link, Redirect } from "react-router-dom";
import {fetchGetProfile, fetchLogin} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {useEffect, useState} from "react";

const LoginCard = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    height: 200,
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const RegisterButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#027ffe",
    "&:hover": {
        backgroundColor: "#0059B2",
    },
    padding: 15,
}));

const AuthPageLayout = ({ info, fetchLogin, fetchGetProfile }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
        const accessToken = localStorage.getItem("access")
        const refreshToken = localStorage.getItem("refresh")
        if (accessToken && refreshToken){
            fetchGetProfile()
        }
    } ,[])
    return (
        <div style={{ display: "flex" }}>
            {info.profileType === "auditor" && <Redirect to="companies" />}
            {info.profileType === "company" && (
                <Redirect to="company-documents" />
            )}
            {info.profileType === "employer" && <Redirect to="my-documents" />}
            <div style={styles.wrapperLeft}>
                <LoginCard elevation={4}>
                    <TextField
                        label="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        variant="standard"
                        style={{
                            marginTop: -15,
                            marginBottom: 15,
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
                        }}
                    />
                    {info.is_login_loading ? (
                        <CircularProgress />
                    ) : (
                        <Button
                            variant="outlined"
                            size="medium"
                            onClick={() => fetchLogin({ login, password })}
                        >
                            Войти
                        </Button>
                    )}
                </LoginCard>
            </div>
            <div style={styles.wrapperRight}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        transform: "rotate(10deg)",
                    }}
                >
                    <DecorativeCard />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        transform: "rotate(-5deg)",
                    }}
                >
                    <DecorateCardTopLeft />
                </div>
                <div
                    style={{ position: "absolute", bottom: -120, right: -120 }}
                >
                    <DecorateCardBottom />
                </div>
                <h1 className="logoText">
                    Удалённый аудит
                    <br /> который вы всегда хотели
                </h1>
                <Link to="register" style={{ textDecoration: "none" }}>
                    <RegisterButton>Зарегистрироваться</RegisterButton>
                </Link>
            </div>
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
            fetchLogin,
            fetchGetProfile
        },
        dispatch
    );

export const AuthPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthPageLayout);

const styles = {
    wrapperLeft: {
        backgroundColor: "#f3f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight,
        width: "50%",
        fontFamily: "sans-serif",
    },
    wrapperRight: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        height: window.innerHeight,
        width: "50%",
        paddingLeft: 25,
    },
};
